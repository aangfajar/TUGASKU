const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const db = require('./db');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; 
const { body, validationResult } = require('express-validator');
const path = require('path');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// REGISTRASI
app.post('/register', (req, res) => {
    const {email, username, password } = req.body;

    // Enkripsi password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Simpan ke database
    const sql = 'INSERT INTO user (email, username, password) VALUES (?, ?, ?)';
    db.query(sql, [email, username, hashedPassword], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Gagal mendaftarkan pengguna.');
        }
        res.send('Registrasi berhasil!');
    });
});

// LOGIN
app.post('/login',  
    [
        body('username').notEmpty().withMessage('Username wajib diisi.'),
        body('password').notEmpty().withMessage('Password wajib diisi.')
    ], 
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;

        // Periksa username di database
        const sql = 'SELECT * FROM user WHERE username = ?';
        db.query(sql, [username], (err, results) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Terjadi kesalahan.');
            }

            if (results.length === 0) {
                return res.status(401).send('Username atau password salah.');
            }

            // Periksa password
            const user = results[0];
            const isPasswordValid = bcrypt.compareSync(password, user.password);
            if (!isPasswordValid) {
                return res.status(401).send('Username atau password salah.');
            }

            // Buat token JWT
            const token = jwt.sign({ id: user.id_user, username: user.username }, SECRET_KEY, { expiresIn: '1h' });

            res.json({ message: 'Login berhasil!', token }); // Kirim token ke klien
        });
    }
);

//CREATE CLASS
app.post('/createClass', authenticateToken, (req, res) => {
    const { nama_kelas, mapel, cover_warna } = req.body;
    const id_user = req.user.id;
    const kode_kelas = Math.random().toString(36).substring(2, 8).toUpperCase();

    const insertKelasQuery = `
        INSERT INTO kelas (nama_kelas, mapel, kode_kelas, cover_warna, dibuat_oleh)
        VALUES (?, ?, ?, ?, ?)
    `;

    db.query(insertKelasQuery, [nama_kelas, mapel, kode_kelas, cover_warna, id_user], (err, result) => {
        if (err) {
            console.error('❌ Gagal insert kelas:', err);
            return res.status(500).json({ error: 'Gagal membuat kelas' });
        }

        const id_kelas_baru = result.insertId;

        const insertUserKelasQuery = `
            INSERT INTO user_kelas (id_user, id_kelas, role)
            VALUES (?, ?, 'pengajar')
        `;

        db.query(insertUserKelasQuery, [id_user, id_kelas_baru], (err2) => {
            if (err2) {
                console.error('❌ Gagal insert user_kelas:', err2);
                return res.status(500).json({ error: 'Kelas berhasil dibuat, tapi gagal relasi user' });
            }

            res.status(200).json({ message: 'Kelas berhasil dibuat!', kode_kelas });
        });
    });
});

//JOIN CLASS
app.post('/joinClass', authenticateToken, (req, res) => {
    const { kode_kelas } = req.body;
    const id_user = req.user.id;

    const findKelasQuery = `SELECT id_kelas FROM kelas WHERE kode_kelas = ?`;

    db.query(findKelasQuery, [kode_kelas], (err, results) => {
        if (err) {
            console.error('❌ Gagal cari kelas:', err);
            return res.status(500).json({ error: 'Gagal mencari kelas' });
        }

        if (results.length === 0) {
            return res.status(404).json({ error: 'Kode kelas tidak ditemukan' });
        }

        const id_kelas = results[0].id_kelas;

        const checkDuplicateQuery = `
            SELECT * FROM user_kelas WHERE id_user = ? AND id_kelas = ?
        `;
        db.query(checkDuplicateQuery, [id_user, id_kelas], (err2, dupResults) => {
            if (err2) {
                return res.status(500).json({ error: 'Gagal memeriksa duplikasi' });
            }

            if (dupResults.length > 0) {
                return res.status(400).json({ error: 'Kamu sudah join kelas ini' });
            }

            const insertUserKelasQuery = `
                INSERT INTO user_kelas (id_user, id_kelas, role)
                VALUES (?, ?, 'pelajar')
            `;

            db.query(insertUserKelasQuery, [id_user, id_kelas], (err3) => {
                if (err3) {
                    console.error('❌ Gagal join kelas:', err3);
                    return res.status(500).json({ error: 'Gagal join kelas' });
                }

                res.status(200).json({ message: 'Berhasil join kelas!' });
            });
        });
    });
});

//CARD KELAS
app.get('/getCardMengajar',authenticateToken, (req, res) => {
    const userId = req.user.id;
    const query = `
        SELECT kelas.* FROM user_kelas
        JOIN kelas ON user_kelas.id_kelas = kelas.id_kelas
        WHERE user_kelas.id_user = ? AND user_kelas.role = 'pengajar'
    `;

    db.query(query,[userId] ,(err, results) => {
    if (err) {
    console.error('Error saat ambil data:', err);
    return res.status(500).json({ error: 'Gagal ambil data kelas' });
    }
        res.json(results);
    });
});

app.get('/getCardTerdaftar',authenticateToken, (req, res) => {
    const userId = req.user.id;
    const query = `
        SELECT kelas.* FROM user_kelas
        JOIN kelas ON user_kelas.id_kelas = kelas.id_kelas
        WHERE user_kelas.id_user = ? AND user_kelas.role = 'pelajar'
    `;

    db.query(query,[userId] ,(err, results) => {
    if (err) {
    console.error('Error saat ambil data:', err);
    return res.status(500).json({ error: 'Gagal ambil data kelas' });
    }
        res.json(results);
    });
});

//DATA PROFILE
app.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'Ini adalah data profil Anda.', user: req.user });
});

//CREATE TOKEN
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Pisahkan "Bearer <token>"

    if (!token) return res.status(403).send('Token tidak ditemukan.');

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send('Token tidak valid.');
        req.user = user;
        next();
    });
}

app.use(express.static(path.join(__dirname, '..')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// SERVER
app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});

// ================================ TEST =================================
// function authenticateToken(req, res, next) {
//     const token = req.headers['authorization']; // Ambil token dari header Authorization
//     if (!token) return res.status(403).send('Token tidak ditemukan.');

//     jwt.verify(token, SECRET_KEY, (err, user) => {
//         if (err) return res.status(403).send('Token tidak valid.');
//         req.user = user; // Simpan data pengguna ke dalam request
//         next(); // Lanjutkan ke handler berikutnya
//     });
// }
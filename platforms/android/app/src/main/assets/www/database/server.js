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

// Rute untuk registrasi
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

// Rute untuk login dengan validasi
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

//DATA KELAS
app.get('/cMengajar', (req, res) => {
  const query = 'SELECT * FROM kelas';

  db.query(query, (err, results) => {
    if (err) {
      console.error('❌ Error saat ambil data:', err);
      return res.status(500).json({ error: 'Gagal ambil data kelas' });
    }

    res.json(results);
  });
});

app.get('/profile', authenticateToken, (req, res) => {
    res.json({ message: 'Ini adalah data profil Anda.', user: req.user });
});

function authenticateToken(req, res, next) {
    const token = req.headers['authorization']; // Ambil token dari header Authorization
    if (!token) return res.status(403).send('Token tidak ditemukan.');

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.status(403).send('Token tidak valid.');
        req.user = user; // Simpan data pengguna ke dalam request
        next(); // Lanjutkan ke handler berikutnya
    });
}

app.use(express.static(path.join(__dirname, '..')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'index.html'));
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
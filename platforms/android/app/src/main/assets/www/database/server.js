const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const db = require('./db');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Rute untuk registrasi
app.post('/register', (req, res) => {
    const {email, username, password } = req.body;

    // Enkripsi password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Simpan ke database
    const sql = 'INSERT INTO users (username, nama, password) VALUES (?, ?, ?)';
    db.query(sql, [username, hashedPassword], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Gagal mendaftarkan pengguna.');
        }
        res.send('Registrasi berhasil!');
    });
});

// Rute untuk login
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Periksa username di database
    const sql = 'SELECT * FROM users WHERE username = ?';
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

        res.send('Login berhasil!');
    });
});

// Jalankan server
app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});
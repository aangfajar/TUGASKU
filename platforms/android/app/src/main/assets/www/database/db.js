const mysql = require('mysql');

// Konfigurasi koneksi database
const db = mysql.createConnection({
    host: 'localhost', // Ganti dengan host database Anda
    user: 'root',      // Ganti dengan username MySQL Anda
    password: '',      // Ganti dengan password MySQL Anda
    database: 'tugasku' // Nama database
});

// Hubungkan ke database
db.connect((err) => {
    if (err) {
        console.error('Koneksi ke database gagal:', err);
        return;
    }
    console.log('Terhubung ke database MySQL!');
});

module.exports = db;


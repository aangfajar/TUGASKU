// Event listener untuk form register
$('#registerForm').on('submit', function (e) {
    e.preventDefault(); // Mencegah form dari submit default
    const email = $('#emailRegister').val().trim();
    const username = $('#usernameRegister').val().trim();
    const password = $('#passwordRegister').val().trim();
    const confirmPassword = $('#pwConfirmRegister').val().trim();
    // Validasi apakah semua field telah diisi
    if (email === '' || username === '' || password === '' || confirmPassword === '') {
        showPopupErrorRegister('Harap isi semua field!');
        return;
    }
    // Validasi apakah password dan konfirmasi password cocok
    if (password !== confirmPassword) {
        showPopupErrorRegister('Password dan konfirmasi password tidak cocok!');
        return;
    }
    // Kirim request ke backend
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, username, password })
    })
    .then(async response => {
        if (!response.ok) {
            const data = await response.json().catch(() => ({}));
            throw new Error(data.message || 'Registrasi gagal!');
        }
        return response.text();
    })
    .then(msg => {
        // Registrasi berhasil, redirect ke login
        alert('Registrasi berhasil! Silakan login.');
        window.location.href = 'login.html';
    })
    .catch(err => {
        showPopupErrorRegister(err.message);
    });
});

// Event listener untuk menyembunyikan popup saat area luar diklik
$('#popupRegister').on('click', function (e) {
    if (e.target === this) { // Pastikan klik terjadi di luar popup-box
        hidePopupErrorRegister();
    }
});

// Fungsi untuk menampilkan popup error
function showPopupErrorRegister(message) {
    const $popup = $('#popupRegister');
    $popup.find('.popup-alert').text(message); // Set pesan error
    $popup.show(); // Tampilkan popup
}

// Fungsi untuk menyembunyikan popup error
function hidePopupErrorRegister() {
    $('#popupRegister').hide(); // Sembunyikan popup
}

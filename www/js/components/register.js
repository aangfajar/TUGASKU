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

    // Jika validasi berhasil
    window.location.href = 'login.html'; // Redirect ke halaman login
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
    $('#popupRegister').hide();
}

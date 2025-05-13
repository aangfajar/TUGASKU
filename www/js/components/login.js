// Event listener untuk form login
$('#loginForm').on('submit', function (e) {
    e.preventDefault();

    const username = $('#usernameLogin').val().trim();
    const password = $('#passwordLogin').val().trim();

    if (username === '' || password === '') {
        showPopupErrorLogin('Harap isi username dan password!');
        return;
    }

    window.location.href = 'page.html'; // Redirect jika validasi berhasil
});

// Event listener untuk menyembunyikan popup saat area luar diklik
$('#popupLogin').on('click', function (e) {
    if (e.target === this) { // Pastikan klik terjadi di luar popup-box
        hidePopupErrorLogin();
    }
});

// Fungsi untuk menampilkan popup error
function showPopupErrorLogin(message) {
    const $popup = $('#popupLogin');
    $popup.find('.popup-alert').text(message); // Set pesan error
    $popup.show(); // Tampilkan popup
}

// Fungsi untuk menyembunyikan popup error
function hidePopupErrorLogin() {
    $('#popupLogin').hide(); // Sembunyikan popup
}




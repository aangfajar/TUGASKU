document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('loginForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const username = document.getElementById('usernameLogin').value.trim();
        const password = document.getElementById('passwordLogin').value.trim();

        if (username === '' || password === '') {
            showPopupErrorLogin('Harap isi username dan password!');
            return;
        }

        window.location.href = 'beranda.html'; // Redirect jika validasi berhasil
    });

    // Tambahkan event listener untuk menyembunyikan popup saat area luar diklik
    document.getElementById('popupLogin').addEventListener('click', function (e) {
        if (e.target === this) { // Pastikan klik terjadi di luar popup-box
            hidePopupErrorLogin();
        }
    });
});

function showPopupErrorLogin(message) {
    const popup = document.getElementById('popupLogin');
    const popupMessage = popup.querySelector('.popup-box');
    popupMessage.textContent = message; // Set pesan error
    popup.style.display = 'flex'; // Tampilkan popup
}

function hidePopupErrorLogin() {
    const popup = document.getElementById('popupLogin');
    popup.style.display = 'none'; // Sembunyikan popup
}





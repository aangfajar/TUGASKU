document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registerForm').addEventListener('submit', function (e) {
        e.preventDefault(); // Mencegah form dari submit default

        const email = document.getElementById('emailRegister').value.trim();
        const username = document.getElementById('usernameRegister').value.trim();
        const password = document.getElementById('passwordRegister').value.trim();
        const confirmPassword = document.getElementById('pwConfirmRegister').value.trim();

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
        window.location.href = 'index.html'; // Redirect ke halaman login
    });

    // Tambahkan event listener untuk menyembunyikan popup saat area luar diklik
    document.getElementById('popupRegister').addEventListener('click', function (e) {
        if (e.target === this) { // Pastikan klik terjadi di luar popup-box
            hidePopupErrorRegister();
        }
    });
});

function showPopupErrorRegister(message) {
    const popup = document.getElementById('popupRegister');
    const popupMessage = popup.querySelector('.popup-box');
    popupMessage.textContent = message; // Set pesan error
    popup.style.display = 'flex'; // Tampilkan popup
}

function hidePopupErrorRegister() {
    const popup = document.getElementById('popupRegister');
    popup.style.display = 'none'; // Sembunyikan popup
}
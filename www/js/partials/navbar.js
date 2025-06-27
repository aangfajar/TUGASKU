document.getElementById('menu-icon').addEventListener('click', function (event) {
    const sidePanel = document.querySelector('.side-panel');
    const fadeContainer = document.querySelector('.fade-container');
    sidePanel.classList.toggle('open'); // Tampilkan atau sembunyikan navbar
    fadeContainer.style.display = 'block';
    event.stopPropagation(); // Hentikan event agar tidak menutup navbar saat ikon diklik
});

document.addEventListener('click', function (event) {
    const sidePanel = document.querySelector('.side-panel');
    if (sidePanel.classList.contains('open') && !sidePanel.contains(event.target)) {
        sidePanel.classList.remove('open'); // Tutup navbar jika klik di luar
    }
});

document.addEventListener('click', function (event) {
    const sidePanel = document.querySelector('.side-panel');
    const fadeContainer = document.querySelector('.fade-container');
    if (fadeContainer.contains(event.target)) {
        sidePanel.classList.remove('open'); // Tutup navbar jika klik di luar
        fadeContainer.style.display = 'none';
    }
});

// Tutup navbar saat menu diklik dan set menu aktif
document.querySelectorAll('.menu-list a').forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        const sidePanel = document.querySelector('.side-panel');
        const fadeContainer = document.querySelector('.fade-container');
        sidePanel.classList.remove('open'); // Tutup navbar
        fadeContainer.style.display = 'none';

        // Hapus kelas 'active' dari semua menu
        document.querySelectorAll('.menu-list a').forEach(function (item) {
            item.classList.remove('active');
        });

        // Tambahkan kelas 'active' ke menu yang diklik
        this.classList.add('active');
    });
});
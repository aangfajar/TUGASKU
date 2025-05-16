document.getElementById('menu-icon').addEventListener('click', function (event) {
    const sidePanel = document.querySelector('.side-panel');
    sidePanel.classList.toggle('open'); // Tampilkan atau sembunyikan navbar
    event.stopPropagation(); // Hentikan event agar tidak menutup navbar saat ikon diklik
});

document.addEventListener('click', function (event) {
    const sidePanel = document.querySelector('.side-panel');
    if (sidePanel.classList.contains('open') && !sidePanel.contains(event.target)) {
        sidePanel.classList.remove('open'); // Tutup navbar jika klik di luar
    }
});

// Tutup navbar saat menu diklik dan set menu aktif
document.querySelectorAll('.menu-list a').forEach(function (menuItem) {
    menuItem.addEventListener('click', function () {
        const sidePanel = document.querySelector('.side-panel');
        sidePanel.classList.remove('open'); // Tutup navbar

        // Hapus kelas 'active' dari semua menu
        document.querySelectorAll('.menu-list a').forEach(function (item) {
            item.classList.remove('active');
        });

        // Tambahkan kelas 'active' ke menu yang diklik
        this.classList.add('active');
    });
});
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

document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop(); // Ambil nama file dari URL
    const menuLinks = document.querySelectorAll('.menu-list li a');

    menuLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Tambahkan kelas 'active' pada link yang sesuai
        }
    });
});
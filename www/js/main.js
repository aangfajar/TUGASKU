$(document).ready(function () {
    const $app = $('#app'); // Kontainer utama untuk memuat halaman
    const $auth = $('#auth'); // Kontainer utama untuk login/register

    // Fungsi untuk memuat halaman
    function loadPage(page) {
        $.get(`js/pages/${page}.html`, function (data) {
            if (page === 'login' || page === 'register') {
                $auth.append(data); // Masukkan konten halaman ke dalam #auth
            } else {
                $app.html(data); // Masukkan konten halaman ke dalam kontainer
                $('#menu-label').text(page.charAt(0).toUpperCase() + page.slice(1)); // Ubah label header
                $('.menu-list a').removeClass('active'); // Hapus kelas aktif dari semua menu
                $(`.menu-list a[data-page="${page}"]`).addClass('active'); // Tambahkan kelas aktif ke menu yang sesuai
            }
        }).fail(function () {
            if (page === 'login' || page === 'register') {
                $auth.html('<h1>Halaman tidak ditemukan</h1>');
            } else {
                $app.html('<h1>Halaman tidak ditemukan</h1>');
            }
        });
    }

    // Event listener untuk navigasi
    $('nav a[data-page]').on('click', function (e) {
        e.preventDefault(); // Mencegah reload halaman
        const page = $(this).data('page');
        loadPage(page);
    });

    // Event listener untuk berpindah antara login dan register
    $(document).on('click', '.nav-link', function (e) {
        e.preventDefault(); // Mencegah reload halaman
        const page = $(this).data('page'); // Ambil nama halaman dari data-page
        loadPage(page);
    });

    // Muat halaman default (Beranda)
    loadPage('beranda');

    // Muat halaman default (Login)
    loadPage('login');
});
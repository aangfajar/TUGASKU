
const $cardKecilKosong = $('#card-kecil-kosong');
const $dropdownMenu = $('#dropdownMenu');

// Event listener untuk cardKecilKosong
$cardKecilKosong.on('click', function (e) {
    e.stopPropagation(); // Mencegah event bubbling
    $dropdownMenu.toggle(); // Tampilkan atau sembunyikan dropdown
});

// Sembunyikan dropdown menu jika klik di luar menu
$(document).on('click', function (e) {
    if (!$cardKecilKosong.is(e.target) && !$dropdownMenu.is(e.target) && $dropdownMenu.has(e.target).length === 0) {
        $dropdownMenu.hide(); // Sembunyikan dropdown
    }
});
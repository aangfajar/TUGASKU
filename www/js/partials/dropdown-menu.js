export function showDropdown() {
const cardKecilKosong = $('#card-kecil-kosong');
const dropdownMenu = $('#dropdownMenu');
const buttonCreateClass = $('#button-addClass');

// Event listener untuk cardKecilKosong
cardKecilKosong.on('click', function (e) {
    e.stopPropagation(); // Mencegah event bubbling
    dropdownMenu.toggle(); // Tampilkan atau sembunyikan dropdown
});

buttonCreateClass.on('click', function (e) {
    e.stopPropagation(); // Mencegah event bubbling
    dropdownMenu.toggle(); // Tampilkan atau sembunyikan dropdown
});

// Sembunyikan dropdown menu jika klik di luar menu
$(document).on('click', function (e) {
    if (!dropdownMenu.is(e.target) && dropdownMenu.has(e.target).length === 0) {
        dropdownMenu.hide(); // Sembunyikan dropdown
    }
});
};

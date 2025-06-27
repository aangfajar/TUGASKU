export function showDropdown() {
    const cardKecilKosong = $('#card-kecil-kosong');
    const dropdownMenu = $('#dropdownMenu');
    const buttonCreateClass = $('#button-addClass');
    const buttonOption = $('#option-icon');
    const fadeContainer = document.querySelector('.fade-container');

    // Event listener untuk cardKecilKosong
    cardKecilKosong.on('click', function (e) {
        e.stopPropagation(); // Mencegah event bubbling
        dropdownMenu.toggle(); // Tampilkan atau sembunyikan dropdown
        fadeContainer.style.display = 'block';
    });

    buttonCreateClass.on('click', function (e) {
        e.stopPropagation(); // Mencegah event bubbling
        dropdownMenu.toggle(); // Tampilkan atau sembunyikan dropdown
        fadeContainer.style.display = 'block';
    });

    buttonOption.on('click', function (e) {
        e.stopPropagation(); // Mencegah event bubbling
        dropdownMenu.toggle(); // Tampilkan atau sembunyikan dropdown
        fadeContainer.style.display = 'block';
    });

    // Sembunyikan dropdown menu jika klik di luar menu
    $(document).on('click', function (e) {
        if (fadeContainer.contains(e.target)) {
            dropdownMenu.hide(); // Sembunyikan dropdown
            fadeContainer.style.display = 'none';
        }
    });

    window.addEventListener('hashchange', () => {
        const fadeContainer = document.querySelector('.r2w de-container');
        if (fadeContainer) fadeContainer.style.display = 'none';
    });

    const currentHash = location.hash.slice(2);

    document.querySelectorAll('.menu-list a').forEach(item => {
        item.classList.remove('active');
        
        const page = item.getAttribute('data-page');
        if (page === currentHash) {
        item.classList.add('active');
        }
        });
};

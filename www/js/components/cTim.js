//=========================== FUNGSI =======================









//=========================== KOMPONEN =======================
export function cardTimKosong(){
    return `
    <div class="card-kecil-kosong" id="card-kecil-kosong">
        <div class="card-kecil-cover">
            <img src="img/icon-add.png" alt="Add Icon" class="card-add-icon">
        </div>
        <p>Buat Tim/join Tim</p>
    </div>
    <div class="dropdown-menu-card" id="dropdownMenu" style="--dropdown-top: 230px; --dropdown-left: 125px;" >
        <a href="set-profile.html">
            <img src="img/icon-add-class.png" alt="" class="icon-dropdown" />
            Buat Tim
        </a>
        <a href="set-profile.html">
            <img src="img/icon-join.png" alt="" class="icon-dropdown" />
            Masuk Tim
        </a>
    </div>
    `;  
}

export function cardTimIsi(){
    return `
    <div class="card-kecil-isi">
        <div class="card-kecil-cover-isi">
            <img src="img/icon-profile.jpg" alt="Card Profile Icon" class="card-profile-icon">
        </div>
        <div class="card-kecil-isi-text">
            <p class="title-class">Praktikum ASD</p>
            <p class="mapel-class">Algoritma Struktur Data 24/25</p>
        </div>
    </div>
    `;
}

export function buttonAddTim() {
    return `
    <button class="button-createClass" id="button-createClass">
        <img src="img/icon-add-class.png" alt="Add Icon" class="icon-button-createClass">
        Tambah
    </button>
    <div class="dropdown-menu-card" id="dropdownMenu" style="--dropdown-top: 125px; --dropdown-left: 220px;" >
        <a href="set-profile.html">
            <img src="img/icon-add-class.png" alt="" class="icon-dropdown" />
            Buat Tim
        </a>
        <a href="set-profile.html">
            <img src="img/icon-join.png" alt="" class="icon-dropdown" />
            Masuk Tim
        </a>
    </div>
    `;
}
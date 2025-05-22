//=========================== FUNGSI =======================









//=========================== KOMPONEN =======================
export function cardClassMengajarKosong(){
    return `
    <div class="card-kecil-kosong">
        <div class="card-kecil-cover">
            <img src="img/icon-add.png" alt="Add Icon" class="card-add-icon">
        </div>
        <p>Kelas mengajar baru</p>
    </div>
    `;
}

export function cardClassMengajarIsi(){
    return `
    <div class="card-kecil-isi" onclick="location.hash = '#/inClassMengajar'">
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

export function buttonCreateClass(){
    return `
    <button class="button-createClass" id="button-createClass">
        <img src="img/icon-add-class.png" alt="Add Icon" class="icon-button-createClass">
        Buat
    </button>
    `;
}
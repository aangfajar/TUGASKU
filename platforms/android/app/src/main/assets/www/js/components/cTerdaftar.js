//=========================== FUNGSI =======================









//=========================== KOMPONEN =======================
export function buttonJoinClass() {
    return `
    <button class="button-createClass" id="button-createClass">
        <img src="img/icon-add-class.png" alt="Add Icon" class="icon-button-createClass">
        Masuk
    </button>
    `;
}

export function cardClassTerdaftarKosong() {
    return `
    <div class="card-kecil-kosong">
        <div class="card-kecil-cover">
            <img src="img/icon-add.png" alt="Add Icon" class="card-add-icon">
        </div>
        <p>Kelas baru</p>
    </div>
    `;
}

export function cardClassTerdaftarIsi(){
    return `
    <div class="card-kecil-isi" onclick="location.hash = '#/inClassTerdaftar'">
        <div class="card-kecil-cover-isi">
            <img src="img/icon-profile.jpg" alt="Card Profile Icon" class="card-profile-icon">
        </div>
        <div class="card-kecil-isi-text">
            <p class="title-class">Pweb</p>
            <p class="mapel-class">Pemrograman web 24/25</p>
        </div>
    </div>
    `;
}


//=========================== FUNGSI =======================
export function showLastSeen() {
    
}






//=========================== KOMPONEN =======================
export function cardLastSeenKosong() {
    return `
    <div class="card-kecil-kosong" id="card-kecil-kosong">
        <div class="card-kecil-cover">
            <img src="img/icon-add.png" alt="Add Icon" class="card-add-icon">
        </div>
        <p>Halaman baru</p>
    </div>
    <div class="dropdown-menu-card" id="dropdownMenu" style="--dropdown-top: 230px; --dropdown-left: 125px;" >
        <a href="set-profile.html">
            <img src="img/icon-mengajar-abu.png" alt="" class="icon-dropdown" />
            Mengajar
        </a>
        <a href="set-profile.html">
            <img src="img/icon-terdaftar-abu.png" alt="" class="icon-dropdown" />
            Kelas
        </a>
        <a href="set-profile.html">
            <img src="img/icon-tim-abu.png" alt="" class="icon-dropdown" />
            Tim
        </a>
    </div>
    `;
}

export function cardLastSeenIsi() {
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

export function cardUpComing() {
    return `
    <div class="card-panjang-kosong">
        <p>Tidak ada aktivitas 3 hari mendatang</p>
        <a href="#" class="add-activity-link">+ Aktivitas baru</a>
    </div>
    `;
}

export function cardITask() {
    return `
    <div class="card-panjang-kosong">
        <p>Tidak ada tugas yang di terima</p>
    </div>
    `;
}

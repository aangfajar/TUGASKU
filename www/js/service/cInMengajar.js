//=========================== FUNGSI =======================









//=========================== KOMPONEN =======================
export function contForumMengajar() {
  return `
    <input class="pengumuman" type="text" placeholder="Umumkan sesuatu untuk kelas anda">
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-forum-abu.png" alt="Mengajar Icon" class="icon-label" />
            Forum
        </p>
    </div>
    <div class="innerClass-container">
        <div class="card-list-tugas">
            <div class="icon-list-tugas">
                <img src="img/icon-tugas-abu.png" alt="Ikon Tugas">
            </div>
            <div class="info-list-tugas">
                <p class="judul-list-tugas">Tugas 1 - Tim</p>
                <p class="tanggal-list-tugas">Tanggal 06/04/2025</p>
            </div>
            <div class="tenggat-list-tugas">
                <p class="tanggal-list-tugas">Tenggat 07/04/2025</p>
            </div>
        </div>

        <div class="detail-list-tugas">
            
        
        </div>
    </div>
  `;
}

export function contTugasMengajar() {
    return `
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-tugas-abu.png" alt="Mengajar Icon" class="icon-label" />
            Penugasan Anda
        </p>
        <!-- BUTTON ADD CLASS JIKA BUTUH -->
        <button class="button-addClass" id="button-addClass">
            <img src="img/icon-add-class.png" alt="Add Icon" class="icon-button-addClass">
            Buat
        </button>
    </div>
    <div class="innerClass-container-default">
        Belum ada tugas yang di buat
    </div>
    `;
}


export function contOrangMengajar() {
    return `
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-orang-abu.png" alt="Mengajar Icon" class="icon-label" />
            Orang
        </p>
        <!-- BUTTON ADD CLASS JIKA BUTUH -->
        <button class="button-addClass" id="button-addClass">
            <img src="img/icon-add-class.png" alt="Add Icon" class="icon-button-addClass">
            Tambah
        </button>
    </div>
    <div class="innerClass-container">
        
    </div>
    `;
}

export function contNilaiMengajar() {
    return `
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-nilai-abu.png" alt="Mengajar Icon" class="icon-label" />
            Nilai
        </p>
        <!-- BUTTON ADD CLASS JIKA BUTUH -->
    </div>
    <div class="innerClass-container">
        
    </div>
    `;
}

    // <div class="innerClass-container-default">
    //     Belum ada topik yang di buat
    // </div>
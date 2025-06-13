//=========================== FUNGSI =======================









//=========================== KOMPONEN =======================
export function contForumTerdaftar() {
  return `
    <input class="pengumuman" type="text" placeholder="Umumkan sesuatu untuk kelas anda">
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-tugas-abu.png" alt="Mengajar Icon" class="icon-label" />
            Penugasan Anda
        </p>
    </div>
    <div class="innerClass-container">
        <a class="card-list-tugas">

        </a>
    </div>
  `;
}

export function contTugasTerdaftar() {
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


export function contOrangTerdaftar() {
    return `
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-tugas-abu.png" alt="Mengajar Icon" class="icon-label" />
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

    // <div class="innerClass-container-default">
    //     Belum ada topik yang di buat
    // </div>
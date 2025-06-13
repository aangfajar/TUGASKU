//=========================== FUNGSI =======================









//=========================== KOMPONEN =======================
export function contDitugaskanTugas() {
    return `
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-tugas-abu.png" alt="Mengajar Icon" class="icon-label" />
            Ditugaskan
        </p>
    </div>
    <div class="innerClass-container-default">
        Belum ada tugas yang di tugaskan
    </div>
    `;
}

export function contDiserahkanTugas() {
    return `
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-tugas-abu.png" alt="Mengajar Icon" class="icon-label" />
            Diserahkan
        </p>
    </div>
    <div class="innerClass-container-default">
        Belum ada tugas yang diserahkan
    </div>
    `;
}

export function contSelesaiTugas() {
    return `
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-tugas-abu.png" alt="Mengajar Icon" class="icon-label" />
            Selesai
        </p>
    </div>
    <div class="innerClass-container-default">
        Belum ada tugas yang selesai
    </div>
    `;
}
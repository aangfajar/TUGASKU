export function cardLastSeen() {
    return `
    <div class="card-kecil-kosong" id="card-kecil-kosong">
        <div class="card-kecil-cover">
            <img src="img/icon-add.png" alt="Add Icon" class="card-add-icon">
        </div>
        <p>Halaman baru</p>
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

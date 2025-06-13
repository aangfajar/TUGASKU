export async function cardClass() {
    let html;
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:3000/getCardTerdaftar',{
        headers: {
        'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();
    
    if (data.length === 0) {
        html = `
        <div class="card-kecil-kosong" onclick="location.hash = '#/joinClass'">
            <div class="card-kecil-cover">
                <img src="img/icon-add.png" alt="Add Icon" class="card-add-icon">
            </div>
            <p>Kelas mengajar baru</p>
        </div>
        `;
    }else {
        html = data.map(kelas => `
        <div class="card-kecil-isi" onclick="location.hash = '#/inClassMengajar'">
        <div class="card-kecil-cover-isi" style="background-color:${kelas.cover_warna}">
            <img src="img/icon-profile.jpg" alt="Card Profile Icon" class="card-profile-icon">
        </div>
        <div class="card-kecil-isi-text">
            <p class="title-class">${kelas.nama_kelas}</p>
            <p class="mapel-class">${kelas.mapel}</p>
        </div>
        </div>
    `).join('');
    }
    return html;
}

export async function buttonAddClass(){
    let html;
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:3000/getCardTerdaftar',{
        headers: {
        'Authorization': `Bearer ${token}`
        }
    });
    const data = await res.json();

    if (data.length !== 0) {
        html = `
        <button class="button-addClass" id="button-addClass" onclick="location.hash = '#/joinClass'">
            <img src="img/icon-add-class.png" alt="Add Icon" class="icon-button-addClass">
            Masuk
        </button>
        `; 
    }else  {
        html = ``; 
    }
    return html;
}

// export function cardClassTerdaftarIsi(){
//     return `
//     <div class="card-kecil-isi" onclick="location.hash = '#/inClassMengajar'">
//         <div class="card-kecil-cover-isi">
//             <img src="img/icon-profile.jpg" alt="Card Profile Icon" class="card-profile-icon">
//         </div>
//         <div class="card-kecil-isi-text">
//             <p class="title-class">Praktikum ASD</p>
//             <p class="mapel-class">Algoritma Struktur Data 24/25</p>
//         </div>
//     </div>
//     `;
// }
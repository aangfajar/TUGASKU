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

// export async function cardClassMengajarIsi() {
//   let html = `
//     <div id="anjay" class="card-kecil-isi">
//       Loading...
//     </div>
//   `;

//   const res = await fetch('http://localhost:3000/cMengajar');
//   const data = await res.json();

//   html = data.map(kelas => `
//     <div class="card-kecil-isi" onclick="location.hash = '#/inClassMengajar'">
//       <div class="card-kecil-cover-isi" style="background-color:#${kelas.cover_warna}">
//           <img src="img/icon-profile.jpg" alt="Card Profile Icon" class="card-profile-icon">
//       </div>
//       <div class="card-kecil-isi-text">
//           <p class="title-class">${kelas.nama_kelas}</p>
//           <p class="mapel-class">${kelas.mapel}</p>
//       </div>
//     </div>
//   `).join('');

//   return html;
// }

export function buttonCreateClass(){
    return `
    <button class="button-createClass" id="button-createClass">
        <img src="img/icon-add-class.png" alt="Add Icon" class="icon-button-createClass">
        Buat
    </button>
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


// export function cardClassMengajarIsi() {
//     // const apiUrl = 'http://localhost:3000/cMengajar';
//     // console.log(apiUrl);
//     // fetch(apiUrl)
//     //     .then(response => {
//     //         if (!response.ok) {
//     //         console.log(response)
//     //         throw new Error('Network response was not ok');
//     //         }
//     //     return response.json();
//     // })
//     // .then(userData => {
//     //     // Process the retrieved user data
//     //     console.log('User Data:', userData);
//     // })
//     // .catch(error => {
//     //     console.error('Error:', error);
//     // });

//   const res = fetch('/cMengajar');
//   const data = res.json();

//   if (data.length === 0) {
//     return `<div class="card-kecil-kosong">Tidak ada kelas.</div>`;
//   }

//   return data.map(kelas => `
//     <div class="card-kecil-isi" onclick="location.hash = '#/inClassMengajar'">
//       <div class="card-kecil-cover-isi">
//           <img src="img/icon-profile.jpg" alt="Card Profile Icon" class="card-profile-icon">
//       </div>
//       <div class="card-kecil-isi-text">
//           <p class="title-class">${kelas.nama_kelas}</p>
//           <p class="mapel-class">${kelas.mapel}</p>
//       </div>
//     </div>
//   `).join('');
// }

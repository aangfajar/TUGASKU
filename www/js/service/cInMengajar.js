export async function detailKelas() {
    const token = localStorage.getItem('token');
    const kodeKelas = localStorage.getItem('kode_kelas_aktif_mengajar');

    let html = '';

    try {
        const res = await fetch(`http://localhost:3000/getDetailKelas/${kodeKelas}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });

        const data = await res.json();

        html = `
        <div class="coverInnerClass" id="coverInnerClass" style="background-color: ${data.cover_warna}">
            <button class="button-changeCover" id="button-changeCover-innerClass">
                Ubah cover
                <div class="color-picker" id="color-picker"></div>
            </button>
            <div class="kodeInfo-container">
                <div class="info-container">
                    <h2>${data.nama_kelas}</h2>
                    <p>${data.mapel}</p>
                </div>
                <img id="option-icon" src="img/icon-option.png" alt="Option Icon" class="option-icon"/>
                <div class="dropdown-menu-card" id="dropdownMenu" style="--dropdown-top: 200px; --dropdown-right: 50px;" >
                    <a href="set-profile.html">
                        <img src="img/icon-add-class.png" alt="" class="icon-dropdown" />
                        Buat Tim
                    </a>
                    <a href="set-profile.html">
                        <img src="img/icon-join.png" alt="" class="icon-dropdown" />
                        Masuk Tim
                    </a>
                </div>
                <div class="kode-container">
                    <p class="label-kode">Kode Kelas</p>
                    <h4 class="kode" id="kode">
                        ${data.kode_kelas}
                        <img src="img/icon-copy.png" alt="Copy Icon" class="kode-icon" id="copy-icon"/>
                    </h4>
                </div>
            </div>
        </div>
        `;

    } catch (err) {
        console.error('Gagal mengambil detail kelas:', err);
    }

    return html;
}

export function copyKode(){
    document.getElementById('copy-icon').addEventListener('click', () => {
    const text = document.getElementById('kode').textContent.trim();

    navigator.clipboard.writeText(text)
        .then(() => {
            showPopupErrorCopyKode('Berhasil menyalin kode');
        })
        .catch(err => {
            console.error('❌ Gagal menyalin:', err);
        });
    });

    $('#popup-copyKode').on('click', function (e) {
        if (e.target === this) {
            hidePopupErrorCopyKode();
        }
    });
}

export async function navAddTask() {
    const token = localStorage.getItem('token');
    const kodeKelas = localStorage.getItem('kode_kelas_aktif_mengajar');

    let html = '';

    try {
        const res = await fetch(`http://localhost:3000/getDetailKelas/${kodeKelas}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
        });

        const data = await res.json();

        html = `
        <nav class="infoTask" id="nav-add-task">
            <div class="tCont-1">
                <input class="inputNameTask" id="inputNameTask" type="text" placeholder="Tugas apa nih?">
                <button class="button-serahkan" id="button-tugaskan">
                    Tugaskan
                </button>
            </div>
            <div class="tCont-2">
                <div class="tCont-2-2">
                    <p class="label-p">
                        Untuk
                    </p>
                    <p class="name-forClass">
                        ${data.nama_kelas}
                    </p>
                </div>
                <div class="tCont-2-2">
                    <p class="label-p">
                        Tenggat
                    </p>
                    <input class="inputDeadlineTask" id="inputDeadlineTask" type="date" placeholder="Tugas apa nih?">
                </div>
            </div>
            <div class="tCont-3">
                <p class="label-task-1">Tentang tugas</p>
                    <textarea class="inputAboutTask" id="inputAboutTask" type="text" placeholder="Deskripsikan tugas anda..."></textarea>
                <p class="label-task-2">Lampirkan</p>
            </div>
            <label for="file-upload" class="custom-file-upload">
                <img src="img/icon-upload-abu.png" alt="Upload icon" class="icon-button-addClass">
                Upload file
            </label>
            <input id="file-upload" type="file" />
        </nav>
        `;
    } catch (err) {
        console.error('Gagal mengambil detail kelas:', err);
    }

    return html;
}

export async function navUpdateTask() {
    document.addEventListener('click', async (e) => {
        const card = e.target.closest('#card-list-tugas-mengajar');
        if (!card) return;

        const token = localStorage.getItem('token');
        const idPosting = card.getAttribute('data-id-posting');
        const kodeKelas = localStorage.getItem('kode_kelas_aktif_mengajar');
        let data1;
        let data2;
        
        try {
            const res = await fetch(`http://localhost:3000/getDetailKelas/${kodeKelas}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
            });
            data1 = await res.json();
        } catch (err) {
            console.error('Gagal mengambil detail kelas:', err);
        }

        try {
            const res = await fetch(`http://localhost:3000/getDetailTugas/${idPosting}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            data2 = await res.json();

            const html = `
                <nav class="infoTask" id="nav-update-task">
                    <div class="scroll-infoTask">
                        <div class="tCont-1">
                            <input class="inputNameTask" id="inputNameTask-update" type="text" placeholder="${data2.judul}" />
                            <button class="button-serahkan" id="button-updateTask" style="display : none">
                                Simpan
                            </button>
                        </div>
                        <div class="tCont-2">
                            <div class="tCont-2-2">
                                <p class="label-p">Untuk</p>
                                <p class="name-forClass">${data1.nama_kelas}</p>
                            </div>
                            <div class="tCont-2-2">
                                <p class="label-p">Tenggat</p>
                                <input class="inputDeadlineTask" id="inputDeadlineTask-update" type="date" value="${data2.deadline?.split('T')[0]}" />
                            </div>
                        </div>
                        <div class="tCont-3">
                            <p class="label-task">Tentang tugas</p>
                            <textarea class="inputAboutTask" id="inputAboutTask-update" placeholder="${data2.isi}"></textarea>
                            <p class="label-task">Lampirkan</p>
                            <div class="lampiran-preview">
                                ${data2.file ? `
                                    <a href="http://localhost:3000/penugasan/${data2.file}" target="_blank">
                                    ${data2.file}
                                    </a>
                                ` : '<p class="no-file">Tidak ada lampiran</p>'}
                            </div>
                        </div>
                        <label for="file-upload" class="custom-file-upload">
                            <img src="img/icon-upload-abu.png" alt="Upload icon" class="icon-button-addClass">
                            Upload file
                        </label>
                        <input id="file-upload" type="file" />
                        <div class="tCont-3">
                            <p class="label-task">Jawaban</p>
                        </div>
                    </div>
                </nav>
            `;

            // SISIPKAN KE DOM
            const container = document.querySelector('#container-update-task');
            container.innerHTML = html;

            //BUKA PANEL
            const navUpdateTask = document.querySelector('#nav-update-task');
            const fadeContainer = document.querySelector('.fade-container');
            setTimeout(() => {
                navUpdateTask.classList.toggle('open');
                fadeContainer.style.display = 'block';
            },0 );
            e.stopPropagation();

            //BUTTON SIMPAN ON/OFF
            const judulInput      = document.getElementById('inputNameTask-update');
            const isiInput        = document.getElementById('inputAboutTask-update');
            const deadlineInput   = document.getElementById('inputDeadlineTask-update');
            const fileInput       = document.getElementById('file-upload');
            const saveButton      = document.getElementById('button-updateTask');
            function checkInputs() {
                const judul     = judulInput.value.trim();
                const isi       = isiInput.value.trim();
                const deadline  = deadlineInput.value.trim();
                const file      = fileInput.value.trim();
                // Cek apakah salah satu input ada isinya
                if (judul || isi || deadline || file) {
                    saveButton.style.display = 'flex';
                } else {
                    saveButton.style.display = 'none';
                }
            }
            judulInput.addEventListener('input', checkInputs);
            isiInput.addEventListener('input', checkInputs);
            deadlineInput.addEventListener('input', checkInputs);
            fileInput.addEventListener('input', checkInputs);

        } catch (err) {
            console.error('❌ Gagal mengambil detail tugas:', err);
        }
    });
}

export async function contForumMengajar() {
    let html;
    const token = localStorage.getItem('token');
    const kode_kelas = localStorage.getItem('kode_kelas_aktif_mengajar');

    const res = await fetch(`http://localhost:3000/getTask/${kode_kelas}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
    });

    const data = await res.json();

    const card = data.map(posting => `
                <div class="card-list-tugas" id="card-list-tugas-mengajar" data-id-posting = "${posting.id_posting}">
                    <div class="icon-list-tugas">
                        <img src="img/icon-tugas-abu.png" alt="Ikon Tugas">
                    </div>
                    <div class="info-list-tugas">
                        <p class="judul-list-tugas">${posting.judul}</p>
                        <p class="tanggal-list-tugas">Tanggal ${posting.tanggal_posting}</p>
                    </div>
                    <div class="tenggat-list-tugas">
                        <p class="tanggal-list-tugas">Tenggat ${posting.deadline}</p>
                    </div>
                </div>
                `).join('');

    if (data.length === 0) {
        html = `
        <div class="innerClass-container-default">
            Belum ada tugas yang di buat
        </div>
        `;
    }else {
        html =`
        <div class="innerClass-container">
            ${card}
        </div>
        <div id="container-update-task"></div>
        `;
    }
    return html;
}

export async function contTugasMengajar() {
    let html;
    const token = localStorage.getItem('token');
    const kode_kelas = localStorage.getItem('kode_kelas_aktif_mengajar');

    const res = await fetch(`http://localhost:3000/getTask/${kode_kelas}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
    });

    const data = await res.json();

    const card = data.map(posting => `
                <div class="card-list-tugas" id="card-list-tugas-mengajar" data-id-posting = "${posting.id_posting}">
                    <div class="icon-list-tugas">
                        <img src="img/icon-tugas-abu.png" alt="Ikon Tugas">
                    </div>
                    <div class="info-list-tugas">
                        <p class="judul-list-tugas">${posting.judul}</p>
                        <p class="tanggal-list-tugas">Tanggal ${posting.tanggal_posting}</p>
                    </div>
                    <div class="tenggat-list-tugas">
                        <p class="tanggal-list-tugas">Tenggat ${posting.deadline}</p>
                    </div>
                </div>
                `).join('');

    if (data.length === 0) {
        html = `
        <div class="innerClass-container-default">
            Belum ada tugas yang di buat
        </div>
        `;
    }else {
        html =`
        <div class="innerClass-container">
            ${card}
        </div>
        <div id="container-update-task"></div>
        `;
    }
    return html;
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

function showPopupErrorCopyKode(message) {
    const $popup = $('#popup-copyKode');
    $popup.find('.popup-alert').text(message);
    $popup.show();
}

function hidePopupErrorCopyKode() {
    $('#popup-copyKode').hide();
}

    // <div class="innerClass-container-default">
    //     Belum ada topik yang di buat
    // </div>

            //  <div class="card-list-tugas" id="card-list-tugas-mengajar">
            //     <div class="icon-list-tugas">
            //         <img src="img/icon-tugas-abu.png" alt="Ikon Tugas">
            //     </div>
            //     <div class="info-list-tugas">
            //         <p class="judul-list-tugas">Tugas 1 - Tim</p>
            //         <p class="tanggal-list-tugas">Tanggal 06/04/2025</p>
            //     </div>
            //     <div class="tenggat-list-tugas">
            //         <p class="tanggal-list-tugas">Tenggat 07/04/2025</p>
            //     </div>
            // </div>

                // const judul      = document.getElementById('inputNameTask-update');
                // const isi        = document.getElementById('inputAboutTask-update');
                // const deadline   = document.getElementById('inputDeadlineTask-update');
                // const file       = document.getElementById('file-upload');
                // judul.placeholder    = data.judul;
                // isi.placeholder      = data.isi;
                // deadline.placeholder = data.deadline;
                // file.placeholder     = data.file;

    // <div class="coverInnerClass" id="coverInnerClass" style="background-color: #ffffff">
    //     <button class="button-changeCover" id="button-changeCover-innerClass">
    //         Ubah cover
    //         <div class="color-picker" id="color-picker"></div>
    //     </button>
    //     <div class="kodeInfo-container">
    //         <div class="info-container">
    //             <h2>Praktikum ASD</h2>
    //             <p>Algoritma Struktur Data 24/25</p>
    //         </div>
    //         <img id="option-icon" src="img/icon-option.png" alt="Option Icon" class="option-icon"/>
    //         <div class="dropdown-menu-card" id="dropdownMenu" style="--dropdown-top: 200px; --dropdown-right: 50px;" >
    //             <a href="set-profile.html">
    //                 <img src="img/icon-add-class.png" alt="" class="icon-dropdown" />
    //                 Buat Tim
    //             </a>
    //             <a href="set-profile.html">
    //                 <img src="img/icon-join.png" alt="" class="icon-dropdown" />
    //                 Masuk Tim
    //             </a>
    //         </div>
    //         <div class="kode-container">
    //             <p class="label-kode">Kode Kelas</p>
    //             <h4 class="kode">
    //                 A9W0W8
    //                 <img src="img/icon-copy.png" alt="Copy Icon" class="kode-icon"/>
    //             </h4>
    //         </div>
    //     </div>
    // </div>

    // <nav class="infoTask" id="nav-update-task">
    //     <div class="tCont-1">
    //         <input class="inputNameTask" id="inputNameTask-update" type="text" placeholder="Tugas 1">
    //         <button class="button-serahkan" id="button-updateTask">
    //             Simpan perubahan
    //         </button>
    //     </div>
    //     <div class="tCont-2">
    //         <div class="tCont-2-2">
    //             <p class="label-p">
    //                 Untuk
    //             </p>
    //             <p class="name-forClass">
    //                 Praktikum ASD
    //             </p>
    //         </div>
    //         <div class="tCont-2-2">
    //             <p class="label-p">
    //                 Tenggat
    //             </p>
    //             <input class="inputDeadlineTask" id="inputDeadlineTask-update" type="date" placeholder="Tugas apa nih?">
    //         </div>
    //     </div>
    //     <div class="tCont-3">
    //         <p class="label-task-1">Tentang tugas</p>
    //             <textarea class="inputAboutTask" id="inputAboutTask-update" type="text" placeholder="Deskripsikan tugas anda..."></textarea>
    //         <p class="label-task-2">Lampirkan</p>

    //     </div>
    //     <label for="file-upload" class="custom-file-upload">
    //         <img src="img/icon-upload-abu.png" alt="Upload icon" class="icon-button-addClass">
    //         Upload file
    //     </label>
    //     <input id="file-upload" type="file" />
    // </nav>



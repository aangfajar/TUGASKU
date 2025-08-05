export async function detailKelas() {
    const token = localStorage.getItem('token');
    const kodeKelas = localStorage.getItem('kode_kelas_aktif_terdaftar');

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
        html = `<p style="color: red;">Gagal memuat data kelas: ${err.message}</p>`;
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

export async function navDetailTask() {
    document.addEventListener('click', async (e) => {
        const card = e.target.closest('#card-list-tugas-terdaftar');
        if (!card) return;

        const token = localStorage.getItem('token');
        const idPosting = card.getAttribute('data-id-posting');
        const kodeKelas = localStorage.getItem('kode_kelas_aktif_terdaftar');
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
                <nav class="infoTask" id="nav-detail-task">
                    <div class="scroll-infoTask">
                        <div class="tCont-1">
                            <div class="inputNameTask">${data2.judul}</div>
                            <button class="button-serahkan" id="button-serahkan" style="display : none">
                                Serahkan
                            </button>
                        </div>
                        <div class="tCont-2">
                            <div class="tCont-2-2">
                                <p class="label-p">Untuk</p>
                                <p class="name-forClass">${data1.nama_kelas}</p>
                            </div>
                            <div class="tCont-2-2">
                                <p class="label-p">Tenggat</p>
                                <div class="inputDeadlineTask">${data2.deadline?.split('T')[0]}</div>
                            </div>
                        </div>
                        <div class="tCont-3">
                            <p class="label-task">Tentang tugas</p>
                            <div class="inputAboutTask">${data2.isi}</div>
                            <p class="label-task">Lampiran</p>
                            <div class="lampiran-preview">
                                ${data2.file ? `
                                    <a href="http://localhost:3000/penugasan/${data2.file}" target="_blank">
                                    ${data2.file}
                                    </a>
                                ` : '<p class="no-file">Tidak ada lampiran</p>'}
                            </div>
                            <p class="label-task">Jawaban</p>
                        </div>
                        <label for="file-upload" class="custom-file-upload">
                            <img src="img/icon-upload-abu.png" alt="Upload icon" class="icon-button-addClass">
                            Upload file
                        </label>
                        <input id="jawaban-upload" type="file" />
                    </div>
                </nav>
            `;

            // SISIPKAN KE DOM
            const container = document.querySelector('#container-detail-task');
            container.innerHTML = html;

            //BUKA PANEL
            const navUpdateTask = document.querySelector('#nav-detail-task');
            const fadeContainer = document.querySelector('.fade-container');
            setTimeout(() => {
                navUpdateTask.classList.toggle('open');
                fadeContainer.style.display = 'block';
            },0 );
            e.stopPropagation();

        } catch (err) {
            console.error('❌ Gagal mengambil detail tugas:', err);
        }
    });
}

export async function contForumTerdaftar() {
    let html;
    const token = localStorage.getItem('token');
    const kode_kelas = localStorage.getItem('kode_kelas_aktif_terdaftar');

    const res = await fetch(`http://localhost:3000/getTask/${kode_kelas}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
    });

    const data = await res.json();

    const card = data.map(posting => `
                <div class="card-list-tugas" id="card-list-tugas-terdaftar" data-id-posting = "${posting.id_posting}">
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
        <div id="container-detail-task"></div>
        `;
    }
    return html;
}

export async function contTugasTerdaftar() {
    let html;
    const token = localStorage.getItem('token');
    const kode_kelas = localStorage.getItem('kode_kelas_aktif_terdaftar');

    const res = await fetch(`http://localhost:3000/getTask/${kode_kelas}`, {
    headers: {
        Authorization: `Bearer ${token}`
    }
    });

    const data = await res.json();

    const card = data.map(posting => `
                <div class="card-list-tugas" id="card-list-tugas-terdaftar" data-id-posting = "${posting.id_posting}">
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
        <div id="container-detail-task"></div>
        `;
    }
    return html;
}

export function contOrangTerdaftar() {
    return `
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-tugas-abu.png" alt="Mengajar Icon" class="icon-label" />
            Orang
        </p>
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
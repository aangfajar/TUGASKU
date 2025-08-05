export async function showInfoTaskMengajar(){
    // ======================== CREATE TASK ===============================
    const serahkanBtn = document.getElementById('button-tugaskan');
    serahkanBtn.addEventListener('click', async () => {
        const token = localStorage.getItem('token');
        const id_kelas = localStorage.getItem('kode_kelas_aktif_mengajar');
        const judul = document.getElementById('inputNameTask').value;
        const isi = document.getElementById('inputAboutTask').value;
        const deadline = document.getElementById('inputDeadlineTask').value;
        const file = document.getElementById('file-upload').files[0];

        const formData = new FormData();
        formData.append('id_kelas', id_kelas);
        formData.append('judul', judul);
        formData.append('isi', isi);
        formData.append('deadline', deadline);
        if (file) formData.append('file', file);

        if (judul === '' || isi === '' || deadline === '') {
            showPopupErrorAddTask('Harap lengkapi semua form!');
            return;
        }

        const res = await fetch('http://localhost:3000/createTask', {
            method: 'POST',
            headers: {
            'Authorization': `Bearer ${token}`

            },
            body: formData
        });

        const result = await res.json();
        if (res.ok) {
            window.location.reload();
            showPopupErrorAddTask('Berhasil menugaskan');
            const fadeContainer = document.querySelector('.fade-container');
            const navAddTask = document.querySelector('#nav-add-task');
            const judul = document.getElementById('inputNameTask');
            const isi = document.getElementById('inputAboutTask');
            const deadline = document.getElementById('inputDeadlineTask');
            const file = document.getElementById('file-upload');
            judul.value='';
            isi.value='';
            deadline.value='';
            file.value='';
            navAddTask.classList.remove('open');
            fadeContainer.style.display = 'none';
        } else {
            alert('❌ Gagal: ' + result.error);
        }
    });

    // ======================== BUKA PANEL DETAIL TUGAS MENGAJAR ===============================
    document.getElementById('button-addTask').addEventListener('click', function (event) {
        const navAddTask = document.querySelector('#nav-add-task');
        const fadeContainer = document.querySelector('.fade-container');
        navAddTask.classList.toggle('open'); 
        fadeContainer.style.display = 'block';
        event.stopPropagation();
    });

    // ======================== TUTUP PANEL DETAIL TUGAS ===============================
    document.addEventListener('click', function (event) {
        const fadeContainer = document.querySelector('.fade-container');
        const navAddTask = document.querySelector('#nav-add-task');
        const navUpdateTask = document.querySelector('#nav-update-task');
        if (fadeContainer.contains(event.target)) {
            navAddTask.classList.remove('open');
            navUpdateTask.classList.remove('open');
            fadeContainer.style.display = 'none';
        }
    });

    $('#popup-addTask').on('click', function (e) {
        if (e.target === this) {
            hidePopupErrorAddTask();
        }
    });
}
export function showInfoTaskTerdaftar(){
    // ======================== BUKA PANEL DETAIL TUGAS TERDAFTAR ===============================
    // document.getElementById('card-list-tugas-terdaftar').addEventListener('click', function (event) {
    //     const detailTask = document.querySelector('#detailTask-terdaftar');
    //     const fadeContainer = document.querySelector('.fade-container');
    //     detailTask.classList.toggle('open'); 
    //     fadeContainer.style.display = 'block';
    //     event.stopPropagation(); 
    // });

    // ======================== TUTUP PANEL DETAIL TUGAS ===============================
    document.addEventListener('click', function (event) {
        const fadeContainer = document.querySelector('.fade-container');
        const detailTask = document.querySelector('#nav-detail-task');
        if (fadeContainer.contains(event.target)) {
            detailTask.classList.remove('open');
            fadeContainer.style.display = 'none';
        }
    });
}

function showPopupErrorAddTask(message) {
    const $popup = $('#popup-addTask');
    $popup.find('.popup-alert').text(message);
    $popup.show();
}

function hidePopupErrorAddTask() {
    $('#popup-addTask').hide();
}


    // document.getElementById('card-list-tugas-mengajar').addEventListener('click', function (event) {
    //     const navUpdateTask = document.querySelector('#nav-update-task');
    //     const fadeContainer = document.querySelector('.fade-container');
    //     navUpdateTask.classList.toggle('open');
    //     fadeContainer.style.display = 'block';
    //     event.stopPropagation(); 
    // });

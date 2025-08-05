import { contForumMengajar, contOrangMengajar, contTugasMengajar, contNilaiMengajar, detailKelas, navAddTask, navUpdateTask, copyKode } from '../service/cInMengajar.js';
import { innerClassPickr } from '../partials/colorPicker.js';
import { scrollPage } from '../partials/scrollPage.js';
import { showInfoTaskMengajar } from '../partials/infoTask.js';

export default async () => {
    const navAddTugas = await navAddTask();
    const forumMengajar = await contForumMengajar();
    const tugasMengajar = await contTugasMengajar();
    const detailsKelas = await detailKelas();

    setTimeout(() => {
        scrollPage();
        innerClassPickr();
        showInfoTaskMengajar();
        navUpdateTask();
        copyKode();
    },1 );
    
    return `
        ${detailsKelas}
        <div class="innerClass-menu">
            <nav class="innerClass-menu-list">
                <a href="" data-scrollto="forum" class="nav-link">Forum</a>
                <a href="" data-scrollto="tugas" class="nav-link">Tugas Kelas</a>
                <a href="" data-scrollto="orang" class="nav-link">Orang</a>
                <a href="" data-scrollto="nilai" class="nav-link">Nilai</a>
            </nav>
        </div>
        <div class="popup-container-alert" id="popup-copyKode">
            <div class="popup-alert"></div>
        </div>
        <div class="container-section" id="slider">

            <!-- ================================ SECTION FORUM ================================ -->
            <section id="forum" class="section-menu">
                <input class="pengumuman" type="text" placeholder="Umumkan sesuatu untuk kelas anda">
                <div class="container-label">
                    <p class="label-p">
                        <img src="img/icon-forum-abu.png" alt="Mengajar Icon" class="icon-label" />
                        Forum
                    </p>
                </div>
                ${forumMengajar}
            </section>

            <!-- ================================ SECTION TUGAS ================================ -->
            <section id="tugas" class="section-menu">
                <div class="container-label">
                    <p class="label-p">
                        <img src="img/icon-tugas-abu.png" alt="Mengajar Icon" class="icon-label" />
                        Penugasan Anda
                    </p>
                    <!-- BUTTON ADD CLASS JIKA BUTUH -->
                    <button class="button-addClass" id="button-addTask">
                        <img src="img/icon-add-class.png" alt="Add Icon" class="icon-button-addClass">
                        Buat
                    </button>
                </div>
                ${tugasMengajar}
                ${navAddTugas}
                <div class="popup-container-alert" id="popup-addTask">
                    <div class="popup-alert"></div>
                </div>
            </section>

            <!-- ================================ SECTION ORANG ================================ -->
            <section id="orang" class="section-menu">
                ${contOrangMengajar()}
            </section>

            <!-- ================================ SECTION NILAI ================================ -->
            <section id="nilai" class="section-menu">
                ${contNilaiMengajar()}
            </section>
        </div>
        `;
}
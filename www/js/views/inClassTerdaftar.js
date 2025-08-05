import { contForumTerdaftar,contOrangTerdaftar,contTugasTerdaftar,copyKode,detailKelas, navDetailTask } from '../service/cInTerdaftar.js';
import { scrollPage } from '../partials/scrollPage.js';
import { showInfoTaskTerdaftar } from '../partials/infoTask.js';

export default async() => {
    const detailsKelas = await detailKelas();
    const forumTerdaftar = await contForumTerdaftar();
    const tugasTerdaftar = await contTugasTerdaftar();
    

    setTimeout(() => {
        scrollPage();
        showInfoTaskTerdaftar();
        navDetailTask();
        copyKode();
    }, 0);

    return `
        ${detailsKelas}
        <div class="innerClass-menu">
            <nav class="innerClass-menu-list">
                <a href="#" data-scrollto="forum" class="nav-link">Forum</a>
                <a href="#" data-scrollto="tugas" class="nav-link">Tugas Kelas</a>
                <a href="#" data-scrollto="orang" class="nav-link">Orang</a>
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
                ${forumTerdaftar}
            </section>

            <!-- ================================ SECTION FORUM ================================ -->
            <section id="tugas" class="section-menu">
                <div class="container-label">
                    <p class="label-p">
                        <img src="img/icon-tugas-abu.png" alt="Mengajar Icon" class="icon-label" />
                        Penugasan Anda
                    </p>
                </div>
                ${tugasTerdaftar}
            </section>

            <!-- ================================ SECTION FORUM ================================ -->
            <section id="orang" class="section-menu">
                ${contOrangTerdaftar()}
            </section>
        </div>
    `;
}

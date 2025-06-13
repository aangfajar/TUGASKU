import { contForumMengajar,contOrangMengajar,contTugasMengajar,contNilaiMengajar } from '../service/cInMengajar.js';
import { innerClassPickr } from '../partials/colorPicker.js';
import { scrollPage } from '../partials/scrollPage.js';

export default async () => {
  setTimeout(() => {
    scrollPage();
    innerClassPickr();
  }, 0);


  return `
    <div class="coverInnerClass" id="coverInnerClass">
        <button class="button-changeCover" id="button-changeCover-innerClass">
            Ubah cover
            <div class="color-picker" id="color-picker"></div>
        </button>
        <div class="kodeInfo-container">
            <div class="info-container">
                <h2>Praktikum ASD</h2>
                <p>Algoritma Struktur Data 24/25</p>
            </div>
            <div class="kode-container">
                <p class="label-kode">Kode Kelas</p>
                <h4 class="kode">
                    jhms6ugf
                    <img src="img/icon-copy.png" alt="Copy Icon" class="kode-icon"/>
                </h4>
            </div>
        </div>
    </div>
    <div class="innerClass-menu">
        <nav class="innerClass-menu-list">
            <a href="#" data-scrollto="forum" class="nav-link">Forum</a>
            <a href="#" data-scrollto="tugas" class="nav-link">Tugas Kelas</a>
            <a href="#" data-scrollto="orang" class="nav-link">Orang</a>
            <a href="#" data-scrollto="nilai" class="nav-link">Nilai</a>
        </nav>
    </div>
    <div class="container-section" id="slider">
        <section id="forum" class="section-menu">
            ${contForumMengajar()}
        </section>
        <section id="tugas" class="section-menu">
            ${contTugasMengajar()}
        </section>
        <section id="orang" class="section-menu">
            ${contOrangMengajar()}
        </section>
        <section id="nilai" class="section-menu">
            ${contNilaiMengajar()}
        </section>
    </div>
  `;
}

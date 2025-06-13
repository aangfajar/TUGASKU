import { contForumTerdaftar,contOrangTerdaftar,contTugasTerdaftar } from '../service/cInTerdaftar.js';
import { scrollPage } from '../partials/scrollPage.js';

export default async() => {
  setTimeout(() => {
      scrollPage();
  }, 100);

  return `
    <div class="cover" id="cover">
        <div class="info-container">
            <h2>Praktikum ASD</h2>
            <p>Algoritma Struktur Data 24/25</p>
        </div>
    </div>
    <div class="innerClass-menu">
        <nav class="innerClass-menu-list">
            <a href="#" data-scrollto="forum" class="nav-link">Forum</a>
            <a href="#" data-scrollto="tugas" class="nav-link">Tugas Kelas</a>
            <a href="#" data-scrollto="orang" class="nav-link">Orang</a>
        </nav>
    </div>
    <div class="container-section" id="slider">
        <section id="forum" class="section-menu">
            ${contForumTerdaftar()}
        </section>
        <section id="tugas" class="section-menu">
            ${contTugasTerdaftar()}
        </section>
        <section id="orang" class="section-menu">
            ${contOrangTerdaftar()}
        </section>
    </div>
  `;
}

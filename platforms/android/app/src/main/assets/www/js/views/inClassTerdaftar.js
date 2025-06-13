import { contForumTerdaftar,contOrangTerdaftar,contTugasTerdaftar } from '../components/cInTerdaftar.js';

export default () => {
  setTimeout(() => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section-menu');

  // Fungsi scroll ke section saat klik menu
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-scrollto');
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }

      // Update kelas aktif
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Observer saat user scroll manual
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('data-scrollto') === id);
        });
      }
    });
  }, {
    threshold: 0.5, // setengah layar terlihat
    root: document.querySelector('.container-section'),
  });

  sections.forEach(section => observer.observe(section));
}, 100);

  return `
    <div class="cover">
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

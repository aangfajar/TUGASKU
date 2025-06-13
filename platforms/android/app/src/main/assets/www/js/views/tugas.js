import { showDropdown } from '../components/dropdown-menu.js';
import { showGreeting } from '../components/timeOfDay.js';

export default async () => {

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

setTimeout(() => {
    showDropdown();
}, 0);

    const greet = await showGreeting()
    
    return `
    ${greet}
    <p class="label-p">
        <img src="img/icon-tugas-abu.png" alt="Tugas Icon" class="icon-label" />
        Tugas anda
    </p>
    <div class="innerClass-menu">
        <nav class="innerClass-menu-list">
            <a href="#" data-scrollto="ditugaskan" class="nav-link">Ditugaskan</a>
            <a href="#" data-scrollto="diserahkan" class="nav-link">Diserahkan</a>
            <a href="#" data-scrollto="selesai" class="nav-link">Selesai</a>
        </nav>
    </div>
    <div class="container-section" id="slider">
        <section id="ditugaskan" class="section-menu">
            
        </section>
        <section id="diserahkan" class="section-menu">

        </section>
        <section id="selesai" class="section-menu">
        
        </section>
    </div>
    `;
}
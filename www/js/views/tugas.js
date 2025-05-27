import { showDropdown } from '../components/dropdown-menu.js';
import { showGreeting } from '../components/timeOfDay.js';

export default async () => {
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
            <a href="#" data-scrollto="ditugaskan" class="nav-link active">Ditugaskan</a>
            <a href="#" data-scrollto="diserahkan" class="nav-link">Diserahkan</a>
            <a href="#" data-scrollto="Selesai" class="nav-link">Selesai</a>
        </nav>
    </div>
    <div class="container-section" id="slider">
        <section id="forum" class="section-menu">
            <input class="pengumuman" type="text" placeholder="Umumkan sesuatu untuk kelas anda">
            
        </section>
        <section id="tugas" class="section-menu">
        </section>
        <section id="orang" class="section-menu">
            <input class="pengumuman" type="text" placeholder="Umumkan sesuatu untuk kelas anda">
        </section>
    </div>
    `;
}
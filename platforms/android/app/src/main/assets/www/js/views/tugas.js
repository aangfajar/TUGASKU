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
        <ul class="innerClass-menu-list">
            <li><a href="forum.html" class="active">Ditugaskan</a></li>
            <li><a href="tugas-kelas.html">Belum diserahkan</a></li>
            <li><a href="orang.html">Selesai</a></li>
        </ul>
    </div>
    <div class="tugas-container">
        
    <!-- UBAH CONTAINER SESUAI MENU -->
    </div>
    `;
}
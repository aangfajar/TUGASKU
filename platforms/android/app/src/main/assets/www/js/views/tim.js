import { buttonAddTim, cardTimIsi, cardTimKosong } from '../components/cTim.js';
import { showDropdown } from '../components/dropdown-menu.js';
import { showGreeting } from '../components/timeOfDay.js';

export default async () => {
    setTimeout(() => {
        showDropdown();
    }, 0);

    const greet = await showGreeting()
    
    return `
    ${greet}
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-mengajar-abu.png" alt="Mengajar Icon" class="icon-label" />
            Kelas mengajar anda
        </p>
        <!-- BUTTON ADD CLASS JIKA NO DEFAULT -->
        ${buttonAddTim()}
    </div>
    <div class="container-card">
        ${cardTimKosong()}
    </div>
    `;
}
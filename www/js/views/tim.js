import { buttonAddTim, cardTimIsi, cardTimKosong } from '../service/cTim.js';
import { showDropdown } from '../partials/dropdown-menu.js';
import { showGreeting } from '../partials/timeOfDay.js';

export default async () => {
    setTimeout(() => {
        showDropdown();
    }, 0);

    const greet = await showGreeting()
    
    return `
    ${greet}
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-tim-abu.png" alt="Mengajar Icon" class="icon-label" />
            Tim anda
        </p>
        <!-- BUTTON ADD CLASS JIKA NO DEFAULT -->
        ${buttonAddTim()}
    </div>
    <div class="container-card">
        ${cardTimKosong()}
    </div>
    `;
}
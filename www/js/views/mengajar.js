import { cardClass, buttonAddClass } from '../service/cMengajar.js';
import { showDropdown } from '../partials/dropdown-menu.js';
import { showGreeting } from '../partials/timeOfDay.js';

export default async () => {
    setTimeout(() => {
        showDropdown();
    }, 0);
        
    const greet = await showGreeting()
    const cards = await cardClass();
    const buttonAdd = await buttonAddClass();

    return `
    ${greet}
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-mengajar-abu.png" alt="Mengajar Icon" class="icon-label" />
            Kelas mengajar anda
        </p>
        <!-- BUTTON ADD CLASS JIKA NO DEFAULT -->
        ${buttonAdd}
    </div>
    <div class="container-card">
        ${cards}
    </div>
    `;
}
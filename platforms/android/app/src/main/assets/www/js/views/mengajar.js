import { buttonCreateClass, cardClassMengajarKosong ,cardClassMengajarIsi} from '../components/cMengajar.js';
import { showDropdown } from '../components/dropdown-menu.js';
import { showGreeting } from '../components/timeOfDay.js';

export default async () => {
    let cards = "";
    setTimeout(() => {
        showDropdown();
    }, 0);
        
        const greet = await showGreeting()
        cards = await cardClassMengajarIsi();
    // setTimeout(async () => {
    // }, 2000)
    
    // setTimeout(() => {

    return `
    ${greet}
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-mengajar-abu.png" alt="Mengajar Icon" class="icon-label" />
            Kelas mengajar anda
        </p>
        <!-- BUTTON ADD CLASS JIKA NO DEFAULT -->
        ${buttonCreateClass()}
    </div>
    <div class="container-card">
    ${cards}
    </div>
    `;
    // }, 2000)
}
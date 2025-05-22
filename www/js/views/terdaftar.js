import { showDropdown } from '../components/dropdown-menu.js';
import { buttonJoinClass, cardClassTerdaftarIsi ,cardClassTerdaftarKosong} from '../components/cTerdaftar.js';
import { sapaanWaktu, showGreeting } from '../components/timeOfDay.js';

export default () => {
    setTimeout(() => {
    showDropdown();
    showGreeting();
    }, 0);

    return `
    ${sapaanWaktu()}
    <div class="container-label">
        <p class="label-p">
            <img src="img/icon-mengajar-abu.png" alt="Mengajar Icon" class="icon-label" />
            Kelas mengajar anda
        </p>
        <!-- BUTTON ADD CLASS JIKA NO DEFAULT -->
    </div>
    <div class="container-card">
        ${cardClassTerdaftarKosong()}
    </div>
    `;
}
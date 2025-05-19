import { showDropdown } from '../components/dropdown-menu.js';
import { showGreeting } from '../components/timeOfDay.js';

export default () => {
    setTimeout(() => {
    showDropdown();
    showGreeting();
    }, 0);

    return `
    <h1 id="greeting">
        <!-- time of day teko js -->
    </h1>
    <p class="label-p">
        <img src="img/icon-tugas-abu.png" alt="Tugas Icon" class="icon-label" />
        Tugas anda
    </p>
    `;
}
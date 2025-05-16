import { showDropdown } from '../components/dropdown-menu.js';
import { showGreeting } from '../components/timeOfDay.js';

export default () => {
    setTimeout(() => {
    showDropdown();
    showGreeting();
    }, 0);
    
    return `
    <h1>
        <!-- time of day teko js -->
    </h1>

    <p class="label-p">
        <img src="img/icon-tim-abu.png" alt="Tim Icon" class="icon-label" />
        Tim anda
    </p>
    
    <div class="container-card">
        <div class="card-kecil-kosong" id="card-kecil-kosong">
            <div class="card-kecil-cover">
                <img src="img/icon-add.png" alt="Add Icon" class="card-add-icon">
            </div>
            <p>Buat Tim/join Tim</p>
        </div>
        <div class="dropdown-menu-card" id="dropdownMenu" style="--dropdown-top: 230px; --dropdown-left: 125px;" >
            <a href="set-profile.html">
                <img src="img/icon-mengajar-abu.png" alt="" class="icon-dropdown" />
                Buat Tim
            </a>
            <a href="set-profile.html">
                <img src="" alt="">
                Join
            </a>
        </div>
    </div>
    `;
}
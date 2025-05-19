import { cardLastSeen } from '../components/cBeranda.js';
import { cardUpComing } from '../components/cBeranda.js';
import { cardITask } from '../components/cBeranda.js';
import { showDropdown } from '../components/dropdown-menu.js';
import { sapaanWaktu } from '../components/timeOfDay.js';

export default () => {
  setTimeout(() => {
    showDropdown();
  }, 0);

  return `
  ${sapaanWaktu()}
  <p class="label-p">
    <img src="img/icon-lastseen.png" alt="Lastseen Icon" class="icon-label" />
    Terakhir dilihat
  </p>
  <div class="lastseen-container">
    ${cardLastSeen()}
    <div class="dropdown-menu-card" id="dropdownMenu" style="--dropdown-top: 230px; --dropdown-left: 125px;" >
        <a href="set-profile.html">
            <img src="img/icon-mengajar-abu.png" alt="" class="icon-dropdown" />
            Mengajar
        </a>
        <a href="set-profile.html">
            <img src="" alt="">
            Kelas
        </a>
        <a href="set-profile.html">
            <img src="" alt="">
            Tim
        </a>
    </div>
  </div>
  <p class="label-p">
    <img src="img/icon-calender-abu.png" alt="Lastseen Icon" class="icon-label" />
    Aktivitas mendatang
  </p>
  <div class="upcoming-container">
    ${cardUpComing()}
  </div>
  <p class="label-p">
    <img src="img/icon-itask-abu.png" alt="iTask Icon" class="icon-label" />
    Informasi tugas
  </p>
  <div class="info-tugas-container">
    ${cardITask()}
  </div>`;
};
 

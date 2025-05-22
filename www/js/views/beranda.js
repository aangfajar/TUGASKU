import { cardLastSeenKosong } from '../components/cBeranda.js';
import { cardUpComing } from '../components/cBeranda.js';
import { cardITask } from '../components/cBeranda.js';
import { showDropdown } from '../components/dropdown-menu.js';
import { sapaanWaktu, showGreeting } from '../components/timeOfDay.js';

export default () => {
  setTimeout(() => {
    showDropdown();
    showGreeting();
  }, 0);

  return `
  ${sapaanWaktu()}
  <p class="label-p">
    <img src="img/icon-lastseen.png" alt="Lastseen Icon" class="icon-label" />
    Terakhir dilihat
  </p>
  <div class="lastseen-container">
    ${cardLastSeenKosong()}
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
  </div>
  `;
};

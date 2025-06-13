import { joinClass } from '../service/cJoinClass.js';

export default async() => {
    setTimeout(() => {
        joinClass();
    }, 0);

    return `
    <div class="coverAddClass" id="coverAddClass"></div>
    <input class="inputNameClass" id="inputKodeClass" type="text" placeholder="Kode kelas">
    <button class="button-createClass" id="button-joinClass">
        Masuk
    </button>
    <div class="popup-container-alert" id="popup-joinClass">
        <div class="popup-alert"></div>
    </div>
    `;
}
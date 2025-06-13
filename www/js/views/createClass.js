import { addClassPickr } from '../partials/colorPicker.js';
import { createClass } from '../service/cCreateClass.js';

export default async() => {
    setTimeout(() => {
        addClassPickr();
        createClass();
    }, 0);

    return `
    <div class="coverAddClass" id="coverAddClass">
        <button class="button-changeCover" id="button-changeCover-addClass">
            Ubah cover
            <div class="color-picker" id="color-picker"></div>
        </button>
    </div>
    <input class="inputNameClass" id="inputNameClass" type="text" placeholder="Nama kelas">
    <input class="inputMapelClass" id="inputMapelClass" type="text" placeholder="Mata pelajaran kelas">
    <button class="button-createClass" id="button-createClass">
        Buat
    </button>
    <div class="popup-container-alert" id="popup-createClass">
        <div class="popup-alert"></div>
    </div>
    `;
}
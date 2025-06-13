import { pickrAddClass, defaultColor } from '../partials/colorPicker.js';

export async function createClass(){
    document.getElementById('button-createClass').addEventListener('click', async () => {
        const nama_kelas = document.getElementById('inputNameClass').value;
        const mapel = document.getElementById('inputMapelClass').value;
        const cover_warna = pickrAddClass.getColor().toHEXA().toString();
        console.log(nama_kelas);
        console.log(mapel);
        console.log(cover_warna);

        if (nama_kelas === '' || mapel === '') {
            showPopupErrorCreateClass('Harap isi semua field!');
            return;
        }

        if (cover_warna === defaultColor) {
            showPopupErrorCreateClass('Harap ganti warna cover!');
            return;
        }

        const token = localStorage.getItem('token');

        const res = await fetch('http://localhost:3000/createClass', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ nama_kelas, mapel, cover_warna })
        });

        const result = await res.json();
        if (res.ok) {
            alert('Kelas berhasil dibuat dengan kode: ' + result.kode_kelas);
        } else {
            alert('Gagal membuat kelas: ' + result.error);
        }
    });

        // Event listener untuk menyembunyikan popup saat area luar diklik
    $('#popup-createClass').on('click', function (e) {
        if (e.target === this) { // Pastikan klik terjadi di luar popup-box
            hidePopupErrorCreateClass();
        }
    });

    // Fungsi untuk menampilkan popup error
    function showPopupErrorCreateClass(message) {
        const $popup = $('#popup-createClass');
        $popup.find('.popup-alert').text(message); // Set pesan error
        $popup.show(); // Tampilkan popup
    }

    // Fungsi untuk menyembunyikan popup error
    function hidePopupErrorCreateClass() {
        $('#popup-createClass').hide(); // Sembunyikan popup
    }
}

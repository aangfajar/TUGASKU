export async function joinClass(){
    document.getElementById('button-joinClass').addEventListener('click', async () => {
        const kode_kelas = document.getElementById('inputKodeClass').value;
        console.log(kode_kelas);

        if (kode_kelas === '') {
            showPopupErrorJoinClass('Harap isi kode kelas!');
            return;
        }

        const token = localStorage.getItem('token');

        const res = await fetch('http://localhost:3000/joinClass', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ kode_kelas })
        });

        const data = await res.json();

        if (!res.ok) {
            showPopupErrorJoinClass(data.error); // Misalnya: "Kamu sudah join kelas ini"
            return;
        }

        showPopupErrorJoinClass('Berhasil join kelas!');
    });    

    // Event listener untuk menyembunyikan popup saat area luar diklik
    $('#popup-joinClass').on('click', function (e) {
        if (e.target === this) { // Pastikan klik terjadi di luar popup-box
            hidePopupErrorJoinClass();
        }
    });

    // Fungsi untuk menampilkan popup error
    function showPopupErrorJoinClass(message) {
        const $popup = $('#popup-joinClass');
        $popup.find('.popup-alert').text(message); // Set pesan error
        $popup.show(); // Tampilkan popup
    }

    // Fungsi untuk menyembunyikan popup error
    function hidePopupErrorJoinClass() {
        $('#popup-joinClass').hide(); // Sembunyikan popup
    }
}
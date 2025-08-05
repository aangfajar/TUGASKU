// ============================= BUKA PANEL SETTING =================================
document.getElementById('profile-icon').addEventListener('click', function (event) {
    const panelSetting = document.querySelector('.panel-setting');
    const fadeContainer = document.querySelector('.fade-container');
    panelSetting.classList.toggle('open'); // Tampilkan atau sembunyikan navbar
    fadeContainer.style.display = 'block';
    event.stopPropagation(); // Hentikan event agar tidak menutup navbar saat ikon diklik
});
// ============================= TUTUP PANEL SETTING =================================
document.addEventListener('click', function (event) {
    const fadeContainer = document.querySelector('.fade-container');
    const panelSetting = document.querySelector('.panel-setting');
    const usernameInput = document.getElementById('set-username');
    const emailInput = document.getElementById('set-email');
    const saveButton = document.getElementById('save-button');
    if (fadeContainer.contains(event.target)) {
        panelSetting.classList.remove('open');
        fadeContainer.style.display = 'none';
        usernameInput.value='';
        emailInput.value='';
        saveButton.style.display = 'none';
    }
});

// ============================= TOMBOL SIMPAN PERUBAHAN =================================
const usernameInput = document.getElementById('set-username');
const emailInput = document.getElementById('set-email');
const saveButton = document.getElementById('save-button');
function checkInputs() {
    const username = usernameInput.value.trim();
    const email = emailInput.value.trim();

    // Cek apakah salah satu input ada isinya
    if (username || email) {
        saveButton.style.display = 'block';
    } else {
        saveButton.style.display = 'none';
    }
}
usernameInput.addEventListener('input', checkInputs);
emailInput.addEventListener('input', checkInputs);


// ======================== FETCH DATA INFO AKUN ==============================
//AMBIL INFO AKUN
const token = localStorage.getItem('token');
console.log(token);

fetch('http://localhost:3000/getUser', {
headers: {
    Authorization: `Bearer ${token}`
}
})
.then(res => res.json())
.then(data => {
    const infoUsername = document.getElementById('info-username');
    const infoEmail = document.getElementById('info-email');
    const inputUsername = document.getElementById('set-username');
    const inputEmail = document.getElementById('set-email');
    infoUsername.innerHTML = data.username;
    infoEmail.innerHTML = data.email;
    inputUsername.placeholder = data.username;  
    inputEmail.placeholder = data.email;
})
.catch(err => console.error(err));

//UPDATE INFO AKUN
document.getElementById('save-button').addEventListener('click', async () => {
    const saveButton = document.getElementById('save-button');
    saveButton.disabled = true; // 🔒 Hindari klik berkali-kali

    const token = localStorage.getItem('token');

    const usernameInput = document.getElementById('set-username');
    const emailInput = document.getElementById('set-email');

    const username = usernameInput.value.trim() !== '' ? usernameInput.value.trim() : usernameInput.placeholder;
    const email = emailInput.value.trim() !== '' ? emailInput.value.trim() : emailInput.placeholder;

    try {
        const response = await fetch('http://localhost:3000/updateUser', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ username, email })
        });

        const result = await response.json();

        if (response.ok) {
            window.location.reload();
            showPopupErrorSettingUser('Berhasil update');
            const fadeContainer = document.querySelector('.fade-container');
            const panelSetting = document.querySelector('.panel-setting');
            const usernameInput = document.getElementById('set-username');
            const emailInput = document.getElementById('set-email');
            usernameInput.value='';
            emailInput.value='';
            panelSetting.classList.remove('open');
            fadeContainer.style.display = 'none';
        } else {
            alert('❌ Gagal: ' + result.error);
        }
    } catch (error) {
        alert('❌ Terjadi kesalahan: ' + error.message);
    } finally {
        saveButton.disabled = false; // 🔓 Aktifkan kembali tombol
    }
});

$('#popup-settingUser').on('click', function (e) {
    if (e.target === this) {
        hidePopupErrorSettingUser();
    }
});

function showPopupErrorSettingUser(message) {
    const $popup = $('#popup-settingUser');
    $popup.find('.popup-alert').text(message);
    $popup.show();
}

function hidePopupErrorSettingUser() {
    $('#popup-settingUser').hide();
}
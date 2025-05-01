document.addEventListener('DOMContentLoaded', function () {
    const greetingElement = document.querySelector('.mengajar-container h1, .beranda-container h1, .tim-container h1, .tugas-container h1, .terdaftar-container h1');
    const currentHour = new Date().getHours();

    let greetingMessage = 'Hello';
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = 'Good Morning,';
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = 'Good Afternoon,';
    } else {
        greetingMessage = 'Good Evening,';
    }

    greetingElement.textContent = greetingMessage;
});
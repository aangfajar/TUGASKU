export function showGreeting() {
    const greetingElement = document.querySelector('.container h1');
    if (greetingElement) {
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
    }
}

window.showGreeting = showGreeting;

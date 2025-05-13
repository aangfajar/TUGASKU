$(document).on('DOMNodeInserted', '.container', function () {
    const $greetingElement = $('.container h1');
    if ($greetingElement.length > 0) {
        const currentHour = new Date().getHours();

        let greetingMessage = 'Hello';
        if (currentHour >= 5 && currentHour < 12) {
            greetingMessage = 'Good Morning,';
        } else if (currentHour >= 12 && currentHour < 18) {
            greetingMessage = 'Good Afternoon,';
        } else {
            greetingMessage = 'Good Evening,';
        }

        $greetingElement.text(greetingMessage);
    }
});
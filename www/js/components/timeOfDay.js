export const sapaanWaktu = () => `
  <h1 id="greeting">
  Hello
  </h1>
`;

export const showGreeting = () => {
  const el = document.getElementById('greeting');
    if (!el) {
        return;
    }

  const hour = new Date().getHours();
  let msg = 'Hello';

  if (hour >= 5 && hour < 12){
    msg = 'Good Morning,';
}
  else if (hour >= 12 && hour < 18){
     msg = 'Good Afternoon,';
  }
  else{
    msg = 'Good Evening,';
  }

  el.textContent = msg;
};

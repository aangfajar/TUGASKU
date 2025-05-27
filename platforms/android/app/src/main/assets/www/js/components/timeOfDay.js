export const showGreeting = () => {
  return new Promise((resolve, reject) => {
  
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
    const el = `
    <h1 id="greeting">${msg}</h1>
    `
    resolve(el)
  })
};

// export const showGreeting = () => {
  
//   const el = document.getElementById('greeting');
//     if (!el) {
//         return;
//     }

//   const hour = new Date().getHours();
//   let msg = 'Hello';

//   if (hour >= 5 && hour < 12){
//     msg = 'Good Morning,';
//   }
//   else if (hour >= 12 && hour < 18){
//      msg = 'Good Afternoon,';
//   }
//   else{
//     msg = 'Good Evening,';
//   }

//   el.textContent = msg;
// };

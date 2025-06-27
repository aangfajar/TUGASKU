// export async function showGreeting() {
//   let html;
//   const token = localStorage.getItem('token');
//   console.log(token);

//   const res = await fetch('http://localhost:3000/getUser', {
//     headers: {
//       Authorization: `Bearer ${token}`
//       }
//   });

//   const data = await res.json();

//   const hour = new Date().getHours();
  
//     if (hour >= 5 && hour < 12){
//       html = 'Good Morning,'+data.username;
//     }
//     else if (hour >= 12 && hour < 18){
//       html = 'Good Afternoon,'+data.username;
//     }
//     else{
//       html = 'Good Evening,'+data.username;
//     }
//   return html;
// }

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

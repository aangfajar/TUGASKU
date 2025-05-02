 // Tambahkan animasi keluar sebelum redirect
 const loadingContainer = document.querySelector('.loading-container');

 setTimeout(() => {
     // Tambahkan kelas fade-out
     loadingContainer.classList.add('fade-out');

     // Tunggu animasi selesai sebelum redirect
     setTimeout(() => {
         window.location.href = "login.html"; // Redirect ke login.html
     }, 1000); // Durasi animasi fade-out (1 detik)
 }, 3000); // Durasi loading sebelum animasi keluar
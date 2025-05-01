setTimeout(() => {
    fetch("login.html")
        .then(response => {
            if (response.ok) {
                window.location.href = "login.html";
            } else {
                console.error("File login.html tidak ditemukan!");
            }
        })
        .catch(error => console.error("Error:", error));
}, 3000);
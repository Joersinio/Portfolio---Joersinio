fetch("profil.html")
    .then(response => response.text())
    .then(data => {
        document.querySelector("#profil").innerHTML = data;
    });
let section = 0;

const flecheGauche = document.querySelector("#fleche-gauche");
const flecheDroite = document.querySelector("#fleche-droite");

let courseCommencee = false;

const sections = document.querySelectorAll("main section");
const main = document.querySelector("main");


document.addEventListener("keydown", function(event) {

    if (courseCommencee === false) {
        return;
    }

    if (event.key === "ArrowRight") {

        if (section < sections.length - 1) {
            section++;
        }

        flecheDroite.classList.add("active");

        afficherSection();
    }

    if (event.key === "ArrowLeft") {

        if (section > 0) {
            section--;
        }

        flecheGauche.classList.add("active");

        afficherSection();
    }

});


document.addEventListener("keyup", function(event) {

    if (event.key === "ArrowRight") {
        flecheDroite.classList.remove("active");
    }

    if (event.key === "ArrowLeft") {
        flecheGauche.classList.remove("active");
    }

});


function afficherSection() {

    const position = section * window.innerWidth;

    main.style.transform = `translateX(-${position}px)`;


    if (sections[section].id === "apropos") {

        const podium = document.querySelector(".podium");

        if (podium) {

            podium.classList.remove("arrive");

            setTimeout(function() {
                podium.classList.add("arrive");
            }, 100);

        }

    }

    if (sections[section].id === "competences") {

    const trophees = document.querySelectorAll(".trophees svg");

    console.log("Nombre de trophées :", trophees.length);

    trophees.forEach(function(trophee, index) {

        console.log("Trophée trouvé :", index);

        trophee.classList.remove("apparait");

        setTimeout(function() {

            trophee.classList.add("apparait");

            console.log("Classe ajoutée :", trophee);

        }, index * 300);
    });
}

}


function demarrerFeux() {

    let feux = document.querySelectorAll(".feu");

    feux[0].style.background = "red";

    setTimeout(function() {
        feux[1].style.background = "red";
    }, 500);

    setTimeout(function() {
        feux[2].style.background = "red";
    }, 1000);

    setTimeout(function() {
        feux[3].style.background = "red";
    }, 1500);

    setTimeout(function() {
        feux[4].style.background = "red";
    }, 2000);


    setTimeout(function() {

        feux.forEach(function(feu) {
            feu.style.background = "green";
        });

        const voiture = document.querySelector(".voiture");

        voiture.style.left = "2000px";

        courseCommencee = true;

    }, 2500);

}


demarrerFeux();


function ouvrirFormulaire() {

    document.querySelector("#fenetre-contact").style.display = "block";

}


function fermerFormulaire() {

    document.querySelector("#fenetre-contact").style.display = "none";

}


document.querySelectorAll("header a").forEach(function(lien) {

    lien.addEventListener("click", function(event) {

        event.preventDefault();

        if (courseCommencee === false) {
            return;
        }

        const id = lien.getAttribute("href");

        const sectionChoisie = document.querySelector(id);

        section = Array.from(sections).indexOf(sectionChoisie);

        afficherSection();

    });

});

function ouvrirProjet(projet) {

    
    const fenetre = document.querySelector("#fenetre-" + projet);

    fenetre.style.display = "flex";
}


function fermerProjet(projet) {

    const fenetre = document.querySelector("#fenetre-" + projet);

    fenetre.style.display = "none";
}
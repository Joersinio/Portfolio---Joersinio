document.getElementById("projets").innerHTML = `

<script>
    const modal = document.getElementById("projet-modal");
    const modalTitre = document.getElementById("modal-titre");
    const modalDescription = document.getElementById("modal-description");
    const modalObjectifs = document.getElementById("modal-objectifs");
    const modalTechnologies = document.getElementById("modal-technologies");
    const modalLien = document.getElementById("modal-lien");
    const boutonFermer = modal.querySelector(".modal-fermer");

    let carteActive = null;

    document.querySelectorAll(".projet-card").forEach((carte) => {
        carte.addEventListener("click", (event) => {
            event.preventDefault();

            carteActive = carte;

            modalTitre.textContent = carte.dataset.titre;
            modalDescription.textContent = carte.dataset.description;
            modalObjectifs.textContent = carte.dataset.objectifs;

            modalTechnologies.replaceChildren();

            carte.dataset.technologies.split(",").forEach((technologie) => {
                const badge = document.createElement("span");
                badge.textContent = technologie.trim();
                modalTechnologies.appendChild(badge);
            });

            const lien = carte.getAttribute("href");

            if (lien && lien !== "#" && !lien.startsWith("TON-LIEN")) {
                modalLien.href = lien;
                modalLien.hidden = false;
            } else {
                modalLien.hidden = true;
            }

            modal.classList.add("active");
            modal.setAttribute("aria-hidden", "false");
            document.body.style.overflow = "hidden";

            boutonFermer.focus();
        });
    });

    function fermerModal() {
        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";

        if (carteActive) {
            carteActive.focus();
            carteActive = null;
        }
    }

    boutonFermer.addEventListener("click", fermerModal);

    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            fermerModal();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && modal.classList.contains("active")) {
            fermerModal();
        }
    });
</script>
`;
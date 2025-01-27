var typed = new Typed(".typing", {
    strings: ["Développeuse Web", "Marketrice Digital", "Infographe"],
    typeSpeed: 100, // vitesse de frappe
    backSpeed: 60, // vitesse de retour
    backDelay: 1000, // délai avant de revenir en arrière
    loop: true // boucle infinie
});

// Animation supplémentaire pour montrer l'expertise après la frappe des textes
typed.textElement.addEventListener('typing', function() {
    setTimeout(function() {
        document.querySelector('.typing').classList.add('highlight'); // Ajouter une classe pour mettre en valeur l'élément après la frappe
    }, 500);
});

// Exemple d'ajout d'une animation de fondu pour la section de travail
const workSection = document.querySelector('.work-section');
workSection.classList.add('fade-in');

// Effet pour renforcer la fluidité du changement de textes
setInterval(function() {
    const allStrings = ["Développeuse Web", "Marketing Digital", "Infographie"];
    const randomString = allStrings[Math.floor(Math.random() * allStrings.length)];
    typed.strings = [randomString]; // changer le texte en fonction du tableau
    typed.reset(); // redémarre l'animation avec le nouveau texte
}, 5000); // toutes les 5 secondes

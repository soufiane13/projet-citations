// Tableau contenant quelques citations
const citations = [
    "Le succès est la somme de petits efforts répétés jour après jour.",
    "Apprendre sans réfléchir est vain. Réfléchir sans apprendre est dangereux.",
    "La simplicité est la sophistication suprême.",
    "La meilleure façon de prédire l'avenir, c'est de le créer."
];

// Fonction qui choisit une citation au hasard dans le tableau
function citationAleatoire() {
    const index = Math.floor(Math.random() * citations.length);
    return citations[index];
}

// On exporte la fonction pour pouvoir l'utiliser dans d'autres fichiers (notamment notre test)
module.exports = citationAleatoire;

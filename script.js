
const bouton = document.getElementById("generer");
const champ = document.getElementById("resultat");
const longueur = document.getElementById("longueur");
const copieur = document.getElementById("copier");
const affichage = document.getElementById("affichage");

bouton.addEventListener("click", function() {

const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%";
const taille = Number(longueur.value);
const valeurs = new Uint32Array(taille);
crypto.getRandomValues(valeurs);
let resultat = "";

for (let i = 0; i < taille; i++){
    const index = valeurs[i] % caracteres.length;
    resultat += caracteres[index]
}
champ.value = resultat;
});


copieur.addEventListener("click", function() {
navigator.clipboard.writeText(champ.value);
});

longueur.addEventListener("input", function() {
    affichage.textContent = longueur.value + " caractères";
});
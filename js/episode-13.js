// Définition des variables
let somme=prompt("Combien font 10+2?");
let correct= "12";

while (somme !== correct) {
    let somme=prompt("Combien font 10+2?");
    if (somme ===  correct){
        alert("Vous avez trouvé la bonne réponse");
}
}

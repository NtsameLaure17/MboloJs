// Définition du message
let message="Le moyenne de ces nombre est:"
// Recupération de la variable nombre
let nombre1=prompt("Saisir premier nombre:");
let nombre2=prompt("Saisir second nombre:");
let nombre3=prompt("Saisir troisième nombre:");
// Conversion de la chaine en nombre
let num1=parseFloat(nombre1);
let num2=parseFloat(nombre2);
let num3=parseFloat(nombre3);
// calcul de la moyenne des nombre
let moyenne=(num1+num2+num3)/3;
// Affichage du double du nombre
alert(message+" "+moyenne);

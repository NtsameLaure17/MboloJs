// Definition de lu message
let message="La somme est égale à:"
// Récupération des variables
let Nombre1=prompt("Veuillez saisir le premier nombre:");
let Nombre2=prompt("Veuillez saisir le second nombre:");
// Conversion des chaines de caractères en nombre
let Num1=parseFloat(Nombre1);
let Num2=parseFloat(Nombre2);
// Calcul de la somme
let Somme = Num1+Num2;
// Affichage de l'alerte
alert(message+" "+Somme);

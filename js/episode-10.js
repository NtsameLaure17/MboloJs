// Définition de la variable
let montant=prompt("Veuillez saisir le montant de la facture:");
// Traitement des conditions et affichage
let montant1=parseFloat(montant);
if(montant1>40000){
    let total=montant1-(montant1*0.1);
    alert("Le total est de:"+" "+total);
}
else{
    alert("Le total est de:"+" "+montant);
}

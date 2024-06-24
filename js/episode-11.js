// Definition de la variable
let nombre=prompt("Saisir un nombre:");
// Traitement, ittérations et affichage
let result="";
let nombre1=parseFloat(nombre);
for(i=0;i<=10;i++){
    result += nombre1 + "*" + i + "=" + nombre1 * i +"\n" ;
}
alert(result);



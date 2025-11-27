"use strict";

let numero1 = parseFloat(prompt("Posa el primer valor: "));
let numero2 = parseFloat(prompt("Posa el segon valor: "));
let operacio = prompt("Posa l'operació que vols fer amb + - * / ");
let resultat
switch (operacio)
{
case operacio="*":
    resultat=numero1*numero2;
    alert(numero1+" "+operacio+" "+numero2+" = "+resultat);
    break;
case operacio="-":
    resultat=numero1-numero2;
    alert(numero1+" "+operacio+" "+numero2+" = "+resultat);
    break;
case operacio="+":
    resultat=numero1+numero2;
    alert(numero1+" "+operacio+" "+numero2+" = "+resultat);
    break;
case operacio="/":
    resultat=numero1/numero2;
    alert(numero1+" "+operacio+" "+numero2+" = "+resultat);
    break;
default:
    alert("Posa valors que corresponguin")
}



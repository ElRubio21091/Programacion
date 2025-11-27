"use strict"

//Escriu un programa que, a partir d'un número enter més gran que 0, faci les següents operacions fins que el resultat sigui 1:
//Si el número és parell, dividir-lo entre 2.
//Si el número és imparell, multiplicar-lo per 3 i sumar-li 1.
//Al final, el programa ha de mostrar quantes iteracions ha hagut de fer.

let num=0;
let resultat=parseInt(0);
let calculs=0;
num=parseInt(prompt("Posa un número del 1 al 100"));
while(num<1 || isNaN(num)==true)
{ 
    alert("Posa un número del 1 al 100! Segueix les normes!");
    num=parseInt(prompt("Posa un número del 1 al 100"));         
}
resultat=num;
while (resultat!=1)
{
    if (resultat%2==0)
    {
        resultat=parseInt(resultat/2);
        calculs++
    }
    else
    {
        resultat=parseInt(resultat*3+1);
        calculs++
    }
    alert(resultat);
}    
alert("Has fet "+calculs+" calculs")
 
"use strict"

let num
let comprovacio
comprovar()

function comprovar(){
do{
    num=prompt("Donam un numero enter: ")
    comprovacio=Math.floor(num);
    comprovacio=num-comprovacio
    if (comprovacio!=0){alert("Error")}
} while(comprovacio!=0);}
"use strict"

let n1="";
let n2="";
let operacio="";
let continuar="6";

do{
    Calcular()
    continuar=prompt("Posa FI per sortir o un altre cosa per continuar")
}while (continuar!="FI")


function DemanarCoses(){
    n1=parseFloat(prompt("Numero 1: "));
    n2=parseFloat(prompt("Numero 2: "));
    operacio= prompt("Operació")
}

function Calcular(){
    DemanarCoses();
    try {
        let resultat = 0;
        switch(operacio){
            case "+":
                resultat=n1+n2;
                break;
            case "-":
                resultat=n1-n2;
                break;
            case "*":
                resultat=n1*n2;
                break;
            case "/":
                resultat=n1/n2;
                break;
        }
        if (isNaN(resultat)){
            throw new Error("Dona NaN");
            
        }
        alert(resultat);
    } catch(error){
        console.log(error)
    }
}
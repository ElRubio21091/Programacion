"use strict"

//Millora el joc d'endevinar números amb les següents opcions:
//El programa ha de preguntar entre quins números pot estar el número a encertar.
//També ha de preguntar el màxim d'intents que pot fer l'usuari.
//Quan l'encerti o s'acabin els intents, ha de preguntar si ho vol tornar a intentar.
//Utilitza el bucle for per limitar el nombre d'intents.

let rang1=0;
let rang2=0;
let intents=0;
let num=0;
let pregunta="1";

while (pregunta=="1")
{
    do
    {
        alert("Entre quins valors he de pensar?")
        rang1=parseInt(prompt("Valor 1: "))
        rang2=parseInt(prompt("Valor2: "))
        intents=parseInt(prompt("I en cuants intents?: "))
    } while(isNaN(rang1) && isNaN(rang2) && isNaN(intents) && rang1!=rang2);

    let numeroBo=Math.random()
    numeroBo=parseInt(Math.abs(rang1-rang2)*numeroBo)
    if (rang1<rang2){numeroBo=numeroBo+rang1}
    if (rang1>rang2){numeroBo=numeroBo+rang2}
    let i=1;
    while (i<intents)
    {
        num=parseInt(prompt("Quin número és?: "))
        if (num==numeroBo)
        {
            alert("Has guanyat en "+i+" intents!")
            pregunta=prompt("Escriu 1 per tornar a jugar, cualsevol altre cosa per deixar de jugar")
            i=intents+1
        }
        if (num>numeroBo)
        {
            alert("Més petit!")
            alert("Et queden "+(intents-i)+" intents")
        }
        if (num<numeroBo)
        {
            alert("Més gran!")
            alert("Et queden "+(intents-i)+" intents")
        }
        i++
    }
}
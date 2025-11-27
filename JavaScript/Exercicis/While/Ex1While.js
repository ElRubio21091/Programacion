"use strict"

//Fes un programa que pregunti repetidament la contrasenya fins que l'usuari posi la correcta o fins que ho hagi intentat 3 vegades.
//Finalment ha de mostrar un missatge indicant si l'ha encertat o si s'han acabat els intents.

//Utilitza una constant per guardar la contrasenya correcta.

let contrasenya = "NekosAreTheBest";
let intents=3;
let frase="";
while (intents>0)
{
    frase=prompt("Quina és la contrasenya: ")
    if (frase==contrasenya)
    {
        alert("Correcte!");
        intents=0;
    }
    else 
    {
        intents=intents-1;
        alert("Incorrecte! Tens "+ intents + " intents més");
    }
}
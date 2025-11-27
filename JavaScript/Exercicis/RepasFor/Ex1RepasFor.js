"use strict"

let intents = 0;
let num = 0;
let pregunta = "1";
let caraOcreu = 3
let cara = 0;
let creu = 0;

for (let i = 1; i <= 1000; i++) 
{
    let numeroBo = Math.random()
    numeroBo = parseInt(numeroBo * 100)
    while (numeroBo == 50 || numeroBo == 0) 
    {
        numeroBo = Math.random()
        numeroBo = parseInt(numeroBo * 100)
    }
    if (numeroBo > 50) { cara = cara + 1 }
    if (numeroBo < 50) { creu = creu + 1 }
    
}
alert("Cares: " + cara);
alert("Creus: " + creu);
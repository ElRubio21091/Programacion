"use strict"

let caraOcreu = 3
let caracreu = 0;
let caraOcreu2 = 3
let cara2 = 0;
let creu2 = 0;

for (let i = 1; i <= 1000000; i++) 
{
    let numeroBo = Math.random()
    numeroBo = parseInt(numeroBo * 100)
    let numeroBo2 = Math.random()
    numeroBo2 = parseInt(numeroBo2 * 100)
    while (numeroBo == 50 || numeroBo == 0 || numeroBo2 == 0 || numeroBo2 == 50) 
    {
        numeroBo = Math.random()
        numeroBo = parseInt(numeroBo * 100)
        numeroBo2 = Math.random()
        numeroBo2 = parseInt(numeroBo2 * 100)
    }
    if (numeroBo > 50 && numeroBo2>50) { cara2++ }
    if (numeroBo < 50 && numeroBo2<50) { creu2++ }
    if (numeroBo < 50 && numeroBo2>50) { caracreu++ }
    if (numeroBo > 50 && numeroBo2<50) { caracreu++ }
}
alert("2 cares: " + cara2);
alert("2 creus: " + creu2);
alert("1 cara i 1 creu: " + caracreu);
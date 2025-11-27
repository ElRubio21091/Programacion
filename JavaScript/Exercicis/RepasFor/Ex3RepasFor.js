"use strict"
let uno=0;
let dos=0;
let tres=0;
let cuatre=0;
let cinc=0;
let sis=0;

for (let i = 1; i <= 1000000; i++) 
{
    let numeroBo = Math.random()
    numeroBo = parseInt(numeroBo*7)
    while (numeroBo == 0 || numeroBo == 7) 
    {
        numeroBo = Math.random()
        numeroBo = parseInt(numeroBo*7)
    }
    switch (numeroBo)
    {
        case numeroBo=6:
            sis++;
            break;
        case numeroBo=5:
            cinc++;
            break;
        case numeroBo=4:
            cuatre++;
            break;
        case numeroBo=3:
            tres++;
            break;
        case numeroBo=2:
            dos++;
            break;
        case numeroBo=1:
            uno++;
            break;

    }
}
alert("1: " + uno);
alert("2: " + dos);
alert("3: " + tres);
alert("4: " + cuatre);
alert("5: " + cinc);
alert("6: " + sis);

"use strict"

//Fes un programa com l'anterior però que escrigui una línia amb 1 asterisc, una amb 2 asteriscos... fins arribar a una línia amb N asteriscos.
let columnes=0
let files=0
let n = parseInt(prompt("Cuants asteriscs vols?"));
let text= "*"
let textresultant=""
while (isNaN(n))
{
    alert("Posa un número siusplau")
    n = parseInt(prompt("Cuants asteriscs vols?"));
}

for (let i=1;i<=n;i++)
{
    textresultant=textresultant+text
    console.log(textresultant)
}
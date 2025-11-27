"use strict"

//Fes un programa com l'anterior però que escrigui una línia amb 1 asterisc, una amb 2 asteriscos... fins arribar a una línia amb N asteriscos.
let columnes=0
let files=0
let a = parseInt(prompt("Valor 1: "));
let b = parseInt(prompt("Valor 2: "));
let c = parseInt(prompt("Valor 3: "));
let text1="#####"
let text2="OOOOO"
let text3="XXXXX"
let sortida=10000000;
let text=""

while (isNaN(a) || isNaN(b) || isNaN(c))
{
    alert("Posa un número siusplau")
    a = parseInt(prompt("Valor 1: "));
    b = parseInt(prompt("Valor 2: "));
    c = parseInt(prompt("Valor 3: "));
}

for (let i=1;i<=sortida;i++)
{
    if (a==0)
    {
        text1="     ";
    }
    if (b==0)
    {
        text2="     ";
    }
    if (c==0)
    {
        text3="     ";
    }
    if (a<=0 && b<=0 && c<=0)
    {
        sortida=0;
    }
    text=(text+"\n"+text1+""+text2+""+text3);
    a-=1;
    b-=1;
    c-=1;
}
let solucio=console.log(text)

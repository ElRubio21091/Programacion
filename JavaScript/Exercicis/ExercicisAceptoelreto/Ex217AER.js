"use strict"

let num=0;

do
{
num=parseInt(prompt("Número de la casa"))
if (num%2==0 && num!=0)
{
    console.log("DERECHA")
}
else if (num%2==1)
{
    console.log("IZQUIERDA")
}
}while(num!=0)
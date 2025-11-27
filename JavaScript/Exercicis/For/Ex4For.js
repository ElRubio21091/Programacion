"use strict"

let num=0;

do
{
    num=parseInt(prompt("Posa un número enter positiu: "))
} while(isNaN(num));

for (let i=0;i<=10;i++)
{
    console.log(num+"x"+i+"="+num*i)
}
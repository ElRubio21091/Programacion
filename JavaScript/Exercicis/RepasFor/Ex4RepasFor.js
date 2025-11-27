"use strict"

let num="8723687563269";
let caracters=num.length();
let num2=""
for (let i = 1;caracters>=0; i++) 
{
    caracters=caracters-i
    num2=num2+num.charAt(caracters)   
}
alert(num2);

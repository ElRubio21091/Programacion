"use strict"
let temperatura = parseFloat(prompt("Introdueix la temperatura (25-45): "));
let tos = prompt("Marca quin tipus de tos pateix (No,seca, o expectorant): ");
tos=tos.toUpperCase(tos);
let pressio=parseFloat(prompt("Introdueix la pressió (80-180): "));
let lletra;

if (temperatura<32 || temperatura>42 || pressio<100)
    {
        lletra="M";
    }   
else if (35<=temperatura<=38 || tos=="NO" || 120<pressio<140)
    {
        lletra="E";
    }   
else if (temperatura>38 && tos=="EXPECTORANT")
    {
        lletra="D";
    }   
else if (35<=temperatura>38 && tos=="SECA")
    {
        lletra="C";
    }   
else if (35<=temperatura<=38 || tos=="NO" || 120>pressio || pressio>140)
    {
        lletra="B";
    }   
else 
    {
        lletra="A";
    }

switch(lletra)
{
    case lletra=="M":
        alert("No hi ha res a fer")
    case lletra=="E" || lletra=="M":
        alert("Que esperi sentat... o estirat.")
        break;
    case lletra=="D":
        alert("L'ha de visitar el neumòleg d'urgències.")
        break;
    case lletra=="C":
        alert("Envia'l a la planta COVID.")
        break;
    case lletra=="B":
        alert("Ràpid! Que vingui un cardiòleg!")
        break;
    case lletra=="A":
        alert("Fes-lo esperar una mica i li passes al Dr House, el de 'casos especials'.")
        break;
    }
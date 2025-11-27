"use strict"

//Fes un programa que vagi demanant notes dels alumnes entre 1 i 10.
//Quan l'usuari introdueixi el 0, ha de finalitzar el bucle i mostrar quants han suspès i calcular la mitjana amb un decimal.
let notes=parseFloat(0);
let totalNotes=0;
let mitjana=0;
let suspes=0;
let nota=0;
let i=1;
while (i==!0)
{
    nota=parseFloat(prompt("Introdueix una nota del 1 al 10 (0 per acabar): "))
    if (isNaN(nota)==true)
        {
            alert("Inserta números del 1 al 10!")
        }
    if (nota==0 && isNaN(nota)==false)
    {
        alert("Mitjana: "+mitjana);
        alert("Suspesos: "+suspes);
        i=0;
    }
    else if (10>=nota>0 && isNaN(nota)==false) 
    {
        if (nota<5)
        {
            suspes++;
        }
        notes=parseFloat(nota+notes);
        totalNotes=parseFloat(totalNotes+1);
        mitjana=notes/totalNotes;
    }
}
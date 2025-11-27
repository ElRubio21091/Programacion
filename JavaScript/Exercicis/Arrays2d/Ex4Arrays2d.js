"use strict"

/*

Els arrays quadrats tenen el mateix nombre de files i de columnes.
Fes un programa que demani la mida de l'array (M).
Crea un array de M x M.
Omple l'array amb els números de l'1 al MxM.
Mostra l'array.
Fes també els següents exercicis.
Omple l'array posant 1 a la diagonal major i els números del 2 a l'M en les altres diagonals.
Mostra l'array.
Suma els elements de la diagonal major i mostra el resultat.
Suma els elements del triangle superior i mostra el resultat (elements per sobre de la diagonal major).
Suma els elements del triangle inferior i mostra el resultat (elements per sota de la diagonal major).
Omple els elements del triangle superior amb 0s.
Omple els elements del triangle inferior amb 0s.
Mostra l'array.
Repeteix els passos anteriors però amb la diagonal major inversa.

*/


let dimensions=prompt("Donam les dimensions del quadrat")

const arr = [];
for (let i = 0; i < dimensions; i++) {
    arr[i] = [];
    for (let j = 0; j < dimensions; j++) {   
        arr[i][j] = (i+1)*(j+1); 
    }
}
console.table(arr);

const arr2 = [];
for (let i = 0; i < dimensions; i++) {
    arr2[i] = [];
    for (let j = 0; j < dimensions; j++) {   
        arr2[i][j] = Math.abs(i-j)+1; 
    }
}
console.table(arr2);
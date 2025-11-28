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


let dimensions=parseInt(prompt("Donam les dimensions del quadrat"))

const arr = [];
for (let i = 0; i < dimensions; i++) {
    arr[i] = [];
    for (let j = 0; j < dimensions; j++) {   
        arr[i][j] = (i+1)*(j+1); 
    }
}
console.table(arr);

let comptadorM=0;
let comptadorm=0;
let comptadorTS=0;
let comptadorTI=0;
const arr2 = [];
for (let i = 0; i < dimensions; i++) {
    arr2[i] = [];
    for (let j = 0; j < dimensions; j++) {   
        arr2[i][j] = Math.abs(i-j)+1;
        if (i==j){
            comptadorM=comptadorM+arr2[i][j];
        } 
        if ((i+j)==(dimensions-1)){
            comptadorm=comptadorm+arr2[i][j];
        } 
        if (i>j){
            comptadorTS=comptadorTS+arr2[i][j];
        } 
        if (i<j){
            comptadorTI=comptadorTI+arr2[i][j];
        } 

    }
}
console.table(arr2);
console.log("Suma diagonal major: "+comptadorM)
console.log("Suma diagonal major inversa: "+comptadorm)
console.log("Suma triangle superior: "+comptadorTS)
console.log("Suma triangle inferior: "+comptadorTI)

const arr3= [];
for (let i = 0; i < dimensions; i++) {
    arr3[i] = [];
    for (let j = 0; j < dimensions; j++) {   
        arr3[i][j] = Math.abs(i-j)+1;
        if (i>j){
            arr3[i][j]=0;
        } 
        if (i<j){
            arr3[i][j]=0;
        } 

    }
}
console.table(arr3);

comptadorM=0;
comptadorm=0;
comptadorTS=0;
comptadorTI=0;
const arr4 = [];
for (let i = 0; i < dimensions; i++) {
    arr4[i] = [];
    for (let j = 0; j < dimensions; j++) {
        if (i+j>=dimensions){
            arr4[i][j] = Math.abs(dimensions-(i+1+j+1));
        }
        if (i+j<dimensions){
            arr4[i][j] = Math.abs(dimensions-(i+j));
        }
        if (i==j){
            comptadorm=comptadorm+arr4[i][j];
        } 
        if ((i+j)==(dimensions-1)){
            comptadorM=comptadorM+arr4[i][j];
        } 
        if (i+j>dimensions-1){
            comptadorTI=comptadorTI+arr4[i][j];
        } 
        if (i+j<dimensions-1){
            comptadorTS=comptadorTS+arr4[i][j];
        } 

    }
}
console.table(arr4);
console.log("Suma diagonal major: "+comptadorM)
console.log("Suma diagonal major inversa: "+comptadorm)
console.log("Suma triangle superior: "+comptadorTS)
console.log("Suma triangle inferior: "+comptadorTI)


const arr5= [];
for (let i = 0; i < dimensions; i++) {
    arr5[i] = [];
    for (let j = 0; j < dimensions; j++) {   
        if (i+j>=dimensions){
            arr5[i][j] = Math.abs(dimensions-(i+1+j+1));
        }
        if (i+j<dimensions){
            arr5[i][j] = Math.abs(dimensions-(i+j));
        }
        if (i+j!=dimensions-1){
            arr5[i][j]=0
        }

    }
}
console.table(arr5)
"use strict"

/*

Fes un programa que demani 4 hobbies i 6 menjars preferits.
A partir d'aquestes dades, ha de guardar en cada casella d'un array de 5 x 3 un hobby i un menjar triats aleatòriament.
Finalment, s'ha de mostrar com ha quedat la planificació de la setmana:

*/

const FILAS = 6;
const COLUMNAS = 4;
const arrayfiles=["Dilluns","Dimarts","Dimecres","Dijous","Divendres"]
const arraycolumnes=["Esmorzar","Dinar","Sopar"]
/*
let arrayPM=prompt("Donam 6 menjars que t'agradin separats per comes")
arrayPM=arrayPM.split(",")
let arrayHP=prompt("Donam 4 hobbies que t'agradin separats per comes")
arrayHP=arrayHP.split(",")
*/
let arrayPM=["Poma","Pera","Xocolata","Pastís","Entrepans","Pizza"];
let arrayHP=["Llegir","Videojocs","Dormir"]
const arr = [];
for (let i = 0; i < FILAS; i++) {
    if (i == 0) {
        arr[i] = [" "];
    }
    else {
        arr[i] = [arrayfiles[i-1]]
    }
    for (let j = 0; j < COLUMNAS; j++) {
        if (i == 0 && j == 0) {
            arr[i][j] = "";
        }
        else if (i != 0 && j != 0) {
            arr[i][j] = arrayHP[Math.floor(Math.random() * 4)]+" | "+ arrayPM[Math.floor(Math.random() * 6)]; // 0 a max
        }
        else if (i == 0 && j != 0) {
            arr[i][j] = arraycolumnes[j-1]
        }
    }
}
console.table(arr);

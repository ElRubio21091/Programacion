"use strict"

/*
Fes un programa que contingui les notes de les 4 UF del mòdul Gestió de bases de dades de 6 alumnes.
Si vols, pots generar aquestes notes aleatòriament.
Les notes han de quedar guardades en un array de 6 x 4.
*/

const FILAS = 7;
const COLUMNAS = 5;

const arr = [];
for (let i = 0; i < FILAS; i++) {
    if (i == 0) {
        arr[i] = [" "];
    }
    else {
        arr[i] = ["Alumne " + (i)]
    }
    for (let j = 0; j < COLUMNAS; j++) {
        if (i == 0 && j == 0) {
            arr[i][j] = "";
        }
        else if (i != 0 && j != 0) {
            arr[i][j] = Math.floor(Math.random() * 10); // 0 a max
        }
        else if (i == 0 && j != 0) {
            arr[i][j] = "UF" + j
        }
    }
}
console.table(arr);
let suma = 0
let sumaFiles = [];

for (let i = 1; i < arr.length; i++) {
    suma = 0
    for (let j = 1; j < arr[i].length; j++) {
        suma += arr[i][j];
    }
    sumaFiles.push(suma / (COLUMNAS - 1));
}
console.log(sumaFiles)

let columnas = arr[0].length;
let sumaColumnes = [];
for (let j = 1; j < columnas; j++) {
    let suma = 0;
    for (let i = 1; i < arr.length; i++) {
        suma += arr[i][j];
    }
    sumaColumnes.push(suma / (FILAS - 1));
}
console.log(sumaColumnes);

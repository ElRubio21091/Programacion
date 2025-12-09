"use strict"
/*
Per les posicions on hi ha un bacteri, el bacteri morirà si hi ha menys de 2 bacteris al voltant (morirà d'avorriment) o si n’hi ha més de 3 (morirà d'inanició).
En les posicions on no hi ha cap bacteri, apareix un bacteri si hi ha exactament 3 bacteris al voltant (per crear un nou bacteri es necessiten 3).
En qualsevol altre cas, l'estat de la posició no canvia.
*/

let A1 = crearArrayRandom(10, 10)
let A2 = []

function crearArrayRandom(filas, columnas) {
    let arr = [];
    for (let i = 0; i < filas; i++) {
        arr[i] = [];
        for (let j = 0; j < columnas; j++) {
            if (i == 0 || i == filas - 1 || j == 0 || j == filas - 1) {
                arr[i][j] = 0
            }
            else {
                arr[i][j] = Math.floor(Math.random() * (2));
            }
        }
    }
    return arr;
}

function actualitzarArray(filas, columnas, A1) {
    let arr = [];
    let comptador = 0
    for (let i = 0; i < filas; i++) {
        arr[i] = [];
        for (let j = 0; j < columnas; j++) {
            comptador = 0
            if (i == 0 || i == filas - 1 || j == 0 || j == filas - 1) {
                arr[i][j] = 0
            }
            else {
                if (A1[i - 1][j - 1] == 1) {
                    comptador++;
                }
                if (A1[i - 1][j] == 1) {
                    comptador++;
                }
                if (A1[i - 1][j + 1] == 1) {
                    comptador++;
                }
                if (A1[i][j - 1] == 1) {
                    comptador++;
                }
                if (A1[i][j + 1] == 1) {
                    comptador++;
                }
                if (A1[i + 1][j + 1] == 1) {
                    comptador++;
                }
                if (A1[i + 1][j - 1] == 1) {
                    comptador++;
                }
                if (A1[i + 1][j] == 1) {
                    comptador++;
                }
                if (comptador < 2 || comptador > 3) {
                    arr[i][j] = 0
                }
                else if (A1[i][j] == 0 && comptador == 3) {
                    arr[i][j] = 1
                }
                else {
                    arr[i][j] = A1[i][j]
                }
            }

        }
    }
    return arr;
}

console.table(A1)
console.table(A2)

for (let i = 0; i < 10; i++) {
    A2 = actualitzarArray(10, 10, A1)
    A1 = copiar(A1, A2)
    console.table(A1)
}

function copiar(A1,A2){
    for (let i = 0; i < A2.length; i++) {
        A1[i] = [];
        for (let j = 0; j < A2[i].length; j++) {
            A1[i][j] = A2[i][j];
        }
    }
    return A1
}
"use strict";

/*
Programa que:
1. Pide la dimensión de un array (files y columnes)
2. Crea un array F x C
3. Lo llena con valores aleatorios
4. Muestra el array
5. Suma los elementos de cada fila y los guarda en sumaFiles
6. Suma los elementos de cada columna y los guarda en sumaColumnes
7. Compara la suma de sumaFiles con sumaColumnes
8. Muestra la suma total de todos los elementos
*/

// 1️⃣ Pedir dimensiones
let files = parseInt(prompt("Quantes files vols?"));      // Número de filas
let columnes = parseInt(prompt("Quantes columnes vols?")); // Número de columnas

// 2️⃣ Crear array bidimensional
let a = [];

// 3️⃣ Llenar array con valores aleatorios entre 0 y 9
for (let i = 0; i < files; i++) {
    a[i] = [];
    for (let j = 0; j < columnes; j++) {
        a[i][j] = Math.floor(Math.random() * 10);
    }
}

// 4️⃣ Mostrar array en consola
// console.table() muestra los arrays bidimensionales en forma de tabla, mucho más legible que console.log()
console.table(a);

// 5️⃣ Sumar elementos de cada fila
let sumaFiles = [];
for (let i = 0; i < files; i++) {
    let suma = 0;
    for (let j = 0; j < columnes; j++) {
        suma += a[i][j];
    }
    sumaFiles[i] = suma;
}

// 6️⃣ Sumar elementos de cada columna
let sumaColumnes = [];
for (let j = 0; j < columnes; j++) {
    let suma = 0;
    for (let i = 0; i < files; i++) {
        suma += a[i][j];
    }
    sumaColumnes[j] = suma;
}

// 7️⃣ Comparar la suma total de filas y columnas
let sumaTotalFiles = sumaFiles.reduce((acc, n) => acc + n, 0);
let sumaTotalColumnes = sumaColumnes.reduce((acc, n) => acc + n, 0);

console.log("Suma per files:", sumaFiles);
console.log("Suma per columnes:", sumaColumnes);

if (sumaTotalFiles === sumaTotalColumnes) {
    console.log("Les sumes coincideixen.");
} else {
    console.log("Les sumes NO coincideixen.");
}

// 8️⃣ Suma total de todos los elementos del array bidimensional
let sumaTotal = 0;
for (let i = 0; i < files; i++) {
    for (let j = 0; j < columnes; j++) {
        sumaTotal += a[i][j];
    }
}
console.log("Suma total de tots els elements:", sumaTotal);
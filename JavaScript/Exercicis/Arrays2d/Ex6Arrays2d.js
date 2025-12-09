/*
Per poder multiplicar 2 matrius cal que el nombre de columnes de la primera sigui igual al nombre de files de la segona.
La matriu resultant tindrà el mateix nombre de files que la primera i el mateix nombre de columnes que la segona.

Si el nombre de files de la primera és igual al nombre de columnes de la segona, el resultat serà una matriu quadrada.

Els passos a seguir són:

Multiplicar un a un els elements de la primera fila de M1 amb els elements de la primera columna de M2, sumar tots els
resultats i guardar-los en la casella [0][0] de M3 (matriu resultant).
Repetir amb cada columna de M2 i guardar a [0][1], [0][2]...
Repetir els passos anterior amb cada fila i guardar a [1][x], [2][x]...
Ho pots comprovar amb les següents dades (els 2 primers valors són el nombre de files i de columnes de la primera matriu i a
 continuació venen les dades d'aquesta matriu; després hi ha el nombre de files i columnes de la segona matriu i les dades de
  la segona matriu):
*/
let files = 4;
let columnes = 4;

const A1 = crearArrayRandom(files, 2);   // 4x2
const A2 = crearArrayRandom(2, columnes); // 2x4

function crearArrayRandom(filas, columnas, max = 9) {
    let arr = [];
    for (let i = 0; i < filas; i++) {
        arr[i] = [];
        for (let j = 0; j < columnas; j++) {
            arr[i][j] = Math.floor(Math.random() * (max + 1));
        }
    }
    return arr;
}

const A3 = [];

for (let i = 0; i < files; i++) {     // filas de A1
    A3[i] = [];
    for (let j = 0; j < columnes; j++) { // columnas de A2
        let suma = 0;
        for (let k = 0; k < 2; k++) {    // columnas de A1 / filas de A2
            suma += A1[i][k] * A2[k][j];
        }
        A3[i][j] = suma;
    }
}

console.table(A1);
console.table(A2);
console.table(A3);
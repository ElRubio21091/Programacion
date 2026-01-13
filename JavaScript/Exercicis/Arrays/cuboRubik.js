"use strict"
let arr3=crearArrayRandom(3,3,3)
function crearArrayRandom(filas, columnas,masfilas) {
    let arr = [];
    let comptador=1
    for (let i = 0; i < filas; i++) {
        arr[i] = [];
        for (let j = 0; j < columnas; j++) {
            arr[i][j] = []
            for (let k = 0; k < masfilas; k++) {
            arr[i][j][k] = comptador
            comptador++
        }
        }
    }
    return arr;
}

console.log(arr3)



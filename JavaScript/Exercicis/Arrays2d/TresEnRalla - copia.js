"use strict"


const Tablero = crearArrayRandom(3, 3)
let turn = "O"
let comptador = 2
let joc = true
let winner = 0;

do {
    let fila = demanarFila()
    let columna = demanarColumna()
    if (fila === false || columna === false) {
        alert("Moviment invàlid!");
        continue;
    }
    if (comptador % 2 == 0) {
        turn = "O"
    }
    else {
        turn = "X"
    }
    afegirTauler(fila, columna, turn)
    winner = tresEnRalla(Tablero, 3, 3)
    if (winner == 1) {
        alert("Guanya jugador 1!")
        joc = false
    }
    if (winner == 2) {
        alert("Guanya jugador 2!")
        joc = false
    }
    comptador++
} while (joc);

function crearArrayRandom(filas, columnas) {
    let arr = [];
    for (let i = 0; i < filas; i++) {
        arr[i] = [];
        for (let j = 0; j < columnas; j++) {
            arr[i][j] = 0
        }
    }
    return arr;
}

function demanarFila() {
    let j1f = prompt("A quina fila vols posar la peça (fila = ABC)").toUpperCase()
    if (j1f != "A" && j1f != "B" && j1f != "C") {
        return false
    }
    switch (j1f) {
        case "A":
            return 0
        case "B":
            return 1
        case "C":
            return 2
        default:
            return false
    }

}

function demanarColumna() {
    let j1c = parseInt(prompt("A quina columna vols posar la peça (columna = 123)"))
    if (j1c != 1 && j1c != 2 && j1c != 3) {
        return false
    }
    return (j1c - 1)
}

function afegirTauler(j1f, j1c, turn) {

    if (Tablero[j1f][j1c] == "X" || Tablero[j1f][j1c] == "O") {
        return false
    }
    Tablero[j1f][j1c] = turn
}

function tresEnRalla(Tablero) {
    //Ratlla Vertical
    for (let i = 0; i < 3; i++) {
        if (Tablero[i][0] !== 0 &&
            Tablero[i][0] === Tablero[i][1] &&
            Tablero[i][1] === Tablero[i][2]) {
            return Tablero[i][0] === "O" ? 1 : 2;
        }
    }
    //Ratlla horitzontal
    for (let j = 0; j < 3; j++) {
        if (Tablero[0][j] !== 0 &&
            Tablero[0][j] === Tablero[1][j] &&
            Tablero[1][j] === Tablero[2][j]) {
            return Tablero[0][j] === "O" ? 1 : 2;
        }
    }
    //Horizontal derecha
    if (Tablero[0][0] !== 0 &&
        Tablero[0][0] === Tablero[1][1] &&
        Tablero[1][1] === Tablero[2][2]) {
        return Tablero[0][0] === "O" ? 1 : 2;
    }
    //Horizontal izquierda
    if (Tablero[0][2] !== 0 &&
        Tablero[0][2] === Tablero[1][1] &&
        Tablero[1][1] === Tablero[2][0]) {
        return Tablero[0][2] === "O" ? 1 : 2;
    }
    return 0;
}




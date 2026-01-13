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

function llocsBuits(Tablero, filas, columnas) {
    let pos = 0
    let arr = []
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            pos = Tablero[i][j];
            if (!(pos == "O" || pos == "X")) {
                pos = (i.toString) + (j.toString)
                arr.push[pos]
            }
        }
    }
    return arr
}

function checkWinIfPlaced(board, row, col, symbol) {
    // Si la casilla no está vacía, no se puede usar
    if (board[row][col] !== "") return false;

    // Copiar el tablero
    var temp = [
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]]
    ];

    // Colocar temporalmente la ficha
    temp[row][col] = symbol;

    // Comprobar fila
    var filaOk = true;
    for (var i = 0; i < 3; i++) {
        if (temp[row][i] !== symbol) filaOk = false;
    }
    if (filaOk) return true;

    // Comprobar columna
    var colOk = true;
    for (var i = 0; i < 3; i++) {
        if (temp[i][col] !== symbol) colOk = false;
    }
    if (colOk) return true;

    // Comprobar diagonal principal si aplica
    if (row === col) {
        var diag1Ok = true;
        for (var i = 0; i < 3; i++) {
            if (temp[i][i] !== symbol) diag1Ok = false;
        }
        if (diag1Ok) return true;
    }

    // Comprobar diagonal inversa si aplica
    if (row + col === 2) {
        var diag2Ok = true;
        for (var i = 0; i < 3; i++) {
            if (temp[i][2 - i] !== symbol) diag2Ok = false;
        }
        if (diag2Ok) return true;
    }

    return false;
}

function movimentIA() {
    let arr = llocsBuits(Tablero, 3, 3)
    for (let i = 0; i < arr.length; i++) {
        let pos = arr[i]
        let fila = pos.substring(0)
        let columna = pos.substring(1)
        if (checkWinIfPlaced(Tablero, fila, columna,"X")) {
            Tablero[fila,columna]="X"
        } else if (checkWinIfPlaced(Tablero, fila, columna,"O")) {
            Tablero[fila,columna]="X"
        }
        }
    }

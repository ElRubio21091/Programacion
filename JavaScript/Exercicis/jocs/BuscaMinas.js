"use strict"

let tableroReal=crearArrayRandom(9,9)
let tablero=crearArrayVacio(9,9)

function crearArrayVacio(filas, columnas) {
    let arr = [];
    for (let i = 0; i < filas; i++) {
        arr[i] = [];
        for (let j = 0; j < columnas; j++) {
            arr[i][j] = " ";
        }
    }
    return arr;
}

function crearArrayRandom(filas, columnas) {
    let arr = [];
    for (let i = 0; i < filas; i++) {
        arr[i] = [];
        for (let j = 0; j < columnas; j++) {
            arr[i][j] = Math.floor(Math.random());
        }
    }
    return arr;
}

function revelar(x, y) {
  // 1. Comprobar límites del tablero
  if (x < 0 || x >= 9 || y < 0 || y >= 9) return;

  // 2. Evitar procesar una casilla ya revelada
  if (tablero[y][x]!=" ") return;

  // 3. Marcar como revelada
  tablero[y][x] = tableroReal[y][x];

  // 4. Si la casilla tiene un número (>0), no seguir expandiendo
  if (tablero[y][x] > 0) return;

  // 5. Si es una casilla vacía (numero === 0), llamar recursivamente a sus vecinos
  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (!(i === 0 && j === 0)) {
        revelar(x + i, y + j);
      }
    }
  }
}
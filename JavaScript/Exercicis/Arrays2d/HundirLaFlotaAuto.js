"use strict"
let vaixell = 20
let moviments = 0
let joc = true
let canvi = false
let TableroJugador = [["", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", ""],]

const Tablero = crearTablero();
console.log(Tablero.map(r => r.join(" ")).join("\n"));

function crearTablero() {
  const N = 8;
  // Representación interna: 0 = vacío, 1 = barco
  function nuevoGrid() {
    return Array.from({ length: N }, () => Array(N).fill(0));
  }

  const configuracion = [
    { cantidad: 1, tamaño: 4 },
    { cantidad: 2, tamaño: 3 },
    { cantidad: 3, tamaño: 2 },
    { cantidad: 4, tamaño: 1 }
  ];

  // Comprueba si dentro del bounding box extendido alrededor del barco ya existe un barco (1).
  // r,c = inicio; tamaño = longitud; horiz = horizontal (true) o vertical (false)
  function puedeColocar(grid, r, c, tamaño, horiz) {
    // calcular bounding box (filas desde rmin hasta rmax, columnas cmin..cmax)
    let rmin = r - 1;
    let cmin = c - 1;
    let rmax = horiz ? r + 1 : r + tamaño; // si horizontal, filas r-1..r+1; si vertical, r-1..r+tamaño
    let cmax = horiz ? c + tamaño : c + 1; // si horizontal, cols c-1..c+tamaño; si vertical, c-1..c+1

    // recortar a límites del tablero
    rmin = Math.max(0, rmin);
    cmin = Math.max(0, cmin);
    rmax = Math.min(N - 1, rmax);
    cmax = Math.min(N - 1, cmax);

    // verificar que las celdas del propio barco están dentro y libres
    for (let i = 0; i < tamaño; i++) {
      const rr = r + (horiz ? 0 : i);
      const cc = c + (horiz ? i : 0);
      if (rr < 0 || rr >= N || cc < 0 || cc >= N) return false; // fuera del tablero
    }

    // verificar que no hay ningún '1' en toda la caja
    for (let rr = rmin; rr <= rmax; rr++) {
      for (let cc = cmin; cc <= cmax; cc++) {
        if (grid[rr][cc] === 1) return false;
      }
    }

    return true;
  }

  function colocar(grid, r, c, tamaño, horiz) {
    for (let i = 0; i < tamaño; i++) {
      const rr = r + (horiz ? 0 : i);
      const cc = c + (horiz ? i : 0);
      grid[rr][cc] = 1;
    }
  }

  // Intentar generar tablero; si se atasca (muchos intentos) reiniciamos todo
  const MAX_RESTARTS = 100;
  for (let restart = 0; restart < MAX_RESTARTS; restart++) {
    const grid = nuevoGrid();
    let ok = true;

    for (const { cantidad, tamaño } of configuracion) {
      for (let k = 0; k < cantidad; k++) {
        let placed = false;
        let attempts = 0;
        const MAX_ATTEMPTS_PER_SHIP = 1000;

        while (!placed && attempts < MAX_ATTEMPTS_PER_SHIP) {
          attempts++;
          const horiz = Math.random() < 0.5;
          const r = Math.floor(Math.random() * N);
          const c = Math.floor(Math.random() * N);

          if (puedeColocar(grid, r, c, tamaño, horiz)) {
            colocar(grid, r, c, tamaño, horiz);
            placed = true;
            break;
          }
        }

        if (!placed) {
          // no hemos podido colocar este barco -> reiniciar toda la generación
          ok = false;
          break;
        }
      }
      if (!ok) break;
    }

    if (ok) {
      // convertir 0 -> "A" y 1 -> "B" y devolver
      return grid.map(row => row.map(cell => (cell === 1 ? "B" : "A")));
    }
    // si no ok, continúa con un nuevo restart
  }

  // Si tras MAX_RESTARTS no se ha podido generar (extremadamente improbable), lanzar error
  throw new Error("No se pudo generar un tablero válido tras varios intentos. Vuelve a ejecutar.");
}

// Ejemplo de uso:



do {
    console.table(TableroJugador)
    let coses = demanarCoses()
    if (coses == false) {
        alert("Moviment invàlid!");
        continue;
    }
    let fila = coses[1]
    let columna = coses[0]
    canvi = afegirTauler(fila, columna)
    if (canvi == 2) {
        alert("Ja has posat aquesta posició!");
        continue;
    }
    if (canvi == true && vaixell > 0) {
        vaixell = vaixell - 1
        alert("Has tocat un vaixell, queden " + vaixell + " vaixells")
    }
    if (canvi == false) {
        alert("Aigua!")
    }
    if (vaixell == 0) {
        alert("Victoria! Has fet " + moviments + " moviments")
        joc = false
    }
    moviments++
} while (joc);





function demanarCoses() {
    let j1f = prompt("A quina fila y columna vols buscar? (fila = ABCDEFGH, columna = 123455678, Ex: A3)")
    let lletra = j1f.charAt(0)
    let num = parseInt(j1f.charAt(1))
    let resposta = []
    if (num < 1 || num > 8 || isNaN(num)) {
        return false
    }
    resposta.push((num - 1))
    switch (lletra) {
        case "A":
            resposta.push(0)
            return resposta
        case "B":
            resposta.push(1)
            return resposta
        case "C":
            resposta.push(2)
            return resposta
        case "D":
            resposta.push(3)
            return resposta
        case "E":
            resposta.push(4)
            return resposta
        case "F":
            resposta.push(5)
            return resposta
        case "G":
            resposta.push(6)
            return resposta
        case "H":
            resposta.push(7)
            return resposta
        default:
            return false
    }


}



function afegirTauler(j1f, j1c) {
    if (Tablero[j1f][j1c] == TableroJugador[j1f][j1c]) {
        return 2
    }
    if (Tablero[j1f][j1c] == "A") {
        TableroJugador[j1f][j1c] = "A"
        return false
    }
    else {
        TableroJugador[j1f][j1c] = "B"
        return true
    }
}


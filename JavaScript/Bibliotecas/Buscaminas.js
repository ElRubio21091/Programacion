"use strict"

var TAM = 5;
var MINAS = 5;

var tablero = [];
var visible = [];
var casillasRestantes = TAM * TAM - MINAS;
var juegoTerminado = false;

// Inicializar tableros
for (var i = 0; i < TAM; i++) {
  tablero[i] = [];
  visible[i] = [];
  for (var j = 0; j < TAM; j++) {
    tablero[i][j] = 0;
    visible[i][j] = "_";
  }
}

// Colocar minas
var colocadas = 0;
while (colocadas < MINAS) {
  var f = Math.floor(Math.random() * TAM);
  var c = Math.floor(Math.random() * TAM);

  if (tablero[f][c] !== "M") {
    tablero[f][c] = "M";
    colocadas++;
  }
}

// Contar minas alrededor
for (var i = 0; i < TAM; i++) {
  for (var j = 0; j < TAM; j++) {
    if (tablero[i][j] !== "M") {
      var total = 0;
      for (var x = i - 1; x <= i + 1; x++) {
        for (var y = j - 1; y <= j + 1; y++) {
          try {
            if (tablero[x][y] === "M") total++;
          } catch (e) {}
        }
      }
      tablero[i][j] = total;
    }
  }
}



// Revela casillas 
function revelar(fila, col) {
  if (fila < 0 || fila >= TAM || col < 0 || col >= TAM) return;
  if (visible[fila][col] !== "_") return; // ya revelada

  visible[fila][col] = tablero[fila][col];
  casillasRestantes--;

  if (tablero[fila][col] === 0) {
    for (var i = fila - 1; i <= fila + 1; i++) {
      for (var j = col - 1; j <= col + 1; j++) {
        try {
          revelar(i, j);
        } catch (e) {}
      }
    }
  }
}

// Mostrar tablero visible
function mostrar() {
  console.table(visible);
}

// ---------------- JUEGO ----------------

mostrar();

while (!juegoTerminado) {
  try {
    var entrada = prompt("Introduce fila,columna (0-4)");

    if (entrada === null) {
      throw "Juego cancelado";
    }

    if (!/^\d,\d$/.test(entrada)) {
      throw "Formato incorrecto. Usa fila,columna";
    }

    var fila = Number(entrada[0]);
    var col = Number(entrada[2]);

    if (fila < 0 || fila >= TAM || col < 0 || col >= TAM) {
      throw "Fuera del tablero";
    }

    if (visible[fila][col] !== "_") {
      throw "Casilla ya descubierta";
    }

    if (tablero[fila][col] === "M") {
      visible[fila][col] = "💣";
      console.table(tablero);
      console.log("Has perdido");
      juegoTerminado = true;
    } else {
      revelar(fila, col);
      mostrar();

      if (casillasRestantes === 0) {
        console.log("Has ganado");
        juegoTerminado = true;
      }
    }

  } catch (error) {
    alert("Error: " + error);
  }
}
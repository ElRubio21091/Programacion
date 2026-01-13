"use strict"

export function ordenarArrays(n, valor) {
    let n = [3, 4, 6, 9];      // Llista de valors
    let valor = 6;            // Valor buscat
    let min = 0;              // Primera posició de la llista
    let max = n.length - 1;   // Última posició de la llista
    let mid = 0;              // Posició central (inicialitzar per evitar error)

    while (min <= max) {
        mid = (min + max) / 2;  // Calcular la posició central del tram entre min i max
        if (n[mid] < valor) {
            min = mid + 1;        // Agafar la meitat superior
        } else if (n[mid] > valor) {
            max = mid - 1;        // Agafar la meitat inferior
        } else {
            break;                // Valor trobat
        }
    }

    if (n.length > 0 && n[mid] == valor) {
        alert("S'ha trobat el valor en la posició " + mid);
    } else {
        alert("NO s'ha trobat el valor en la llista");
    }
}

//Copiar un array
export function clonar(arr) {
  const copia = [];
  for (let i = 0; i < arr.length; i++) {
    copia.push(arr[i]);
  }
  return copia;
}
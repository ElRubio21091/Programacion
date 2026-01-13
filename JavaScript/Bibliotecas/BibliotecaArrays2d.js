"use strict"

//Crea un array bidimensional aleatori
export function crearArray2dRandom(filas, columnas, max = 9) {
    let arr = [];
    for (let i = 0; i < filas; i++) {
        arr[i] = [];
        for (let j = 0; j < columnas; j++) {
            arr[i][j] = Math.floor(Math.random() * (max + 1)); // 0 a max
        }
    }
    return arr;
}

// Sumar los elementos de cada fila → devuelve un array
export function sumarFilas(arr) {
    let sumaFiles = [];
    for (let i = 0; i < arr.length; i++) {
        let suma = 0;
        for (let j = 0; j < arr[i].length; j++) {
            suma += arr[i][j];
        }
        sumaFiles[i] = suma;
    }
    return sumaFiles;
}

// Sumar los elementos de cada columna → devuelve un array
export function sumarColumnas(arr) {
    let columnas = arr[0].length;
    let sumaColumnes = [];
    for (let j = 0; j < columnas; j++) {
        let suma = 0;
        for (let i = 0; i < arr.length; i++) {
            suma += arr[i][j];
        }
        sumaColumnes[j] = suma;
    }
    return sumaColumnes;
}

// Sumar todos los elementos de un array bidimensional
export function sumaTotal(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            suma += arr[i][j];
        }
    }
    return suma;
}

// Comparar suma total de filas vs columnas → devuelve true o false
export function compararSumaFilasColumnas(arr) {
    let sumaFiles = sumarFilas(arr);
    let sumaColumnes = sumarColumnas(arr);
    let totalFiles = sumaFiles.reduce((acc, n) => acc + n, 0);
    let totalColumnes = sumaColumnes.reduce((acc, n) => acc + n, 0);
    return totalFiles === totalColumnes;
}

// Encontrar el valor máximo en el array bidimensional
export function valorMaximo(arr) {
    let max = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] > max) max = arr[i][j];
        }
    }
    return max;
}

// Encontrar el valor mínimo en el array bidimensional
export function valorMinimo(arr) {
    let min = arr[0][0];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] < min) min = arr[i][j];
        }
    }
    return min;
}

// Transponer un array bidimensional (intercambiar filas y columnas)
export function transponerArray(arr) {
    let filas = arr.length;
    let columnas = arr[0].length;
    let transpuesto = [];
    for (let j = 0; j < columnas; j++) {
        transpuesto[j] = [];
        for (let i = 0; i < filas; i++) {
            transpuesto[j][i] = arr[i][j];
        }
    }
    return transpuesto;
}


//Aplanar array 2d
export function aplanar(arr) {
  const resultado = [];
  for (let i = 0; i < arr.length; i++) {
    const elemento = arr[i];

    if (Array.isArray(elemento)) {
      for (let j = 0; j < elemento.length; j++) {
        resultado.push(elemento[j]);
      }
    } else {
      resultado.push(elemento);
    }
  }
  return resultado;
}
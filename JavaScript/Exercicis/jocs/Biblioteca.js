"use strict"

/* EXEMPLE
-Biblioteca.js

export function caracola(){
    alert("Hola")
}


-Altre.js
import { caracola } from "./Biblioteca.js";
caracola()


No oblidar el type="module" al html!

*/



//Funcio joc penjat per convertir tots els caracters d'una paraula a "_"
export function ParaulaPerEsbrinar(palabra) {

    let ParaulaPerEsbrinar = "_".repeat(palabra.length)
    return ParaulaPerEsbrinar
}

//Funcio que retorna pedra paper o tisores aleatoriament
export function random() {
    let eleccioRival = Math.round(Math.random() * 4)
    while (eleccioRival == 4 || eleccioRival == 0) {
        eleccioRival = Math.floor(Math.random() * 4)
    }

    switch (eleccioRival) {
        case 1:
            return "PEDRA";
        case 2:
            return "PAPER"
        case 3:
            return "TISORES"
    }
}

//Funcio que demana catets d'un triangle i retorna la hypotenusa
export function Triangle() {
    let catet1 = parseFloat(prompt("Introdueix el valor del catet 1: "))
    let catet2 = parseFloat(prompt("Introdueix el valor del catet 2: "))
    return Math.hypot(catet1, catet2)
}

//Funcio que demana el radi y retorna el perimetre y l'area
export function Cercle(radi) {
    let area = Math.PI * radi ** 2;
    let perimetre = 2 * Math.PI * radi;
    let resultat = [area, perimetre];
    return resultat;
}

export function Mitjanes() {
    let notes = []
    let pregunta = parseFloat(prompt("Cuantes UF vols (max 4)?"))
    while (pregunta > 4 || pregunta <= 0) { pregunta = parseFloat(prompt("Cuantes UF vols (max 4)?")) }
    for (let i = 0; i <= pregunta; i++) {
        let nota = parseFloat(prompt("Posa una nota"));
        notes.push(nota)
    }
    terminal.console.log("UF" + i + ": ");
}

//Genera una letra aleatoria psandole 2 números
export function randomChar(charIni, charFin) {
    // Genera número aleatori entre 65 (A) i 90 (Z)
    let r = Math.floor(Math.random() * (charFin.charCodeAt(0) - charIni.charCodeAt(0) + 1) + charIni.charCodeAt(0));
    // Converteix el número a lletra i la retorna
    return String.fromCharCode(r);
}

//Retorna un caràcter aleatori
export function randomChar2() {
    const LLETRES = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    return LLETRES.charAt(Math.floor(Math.random() * LLETRES.length));
}

//Preguntar un int
export function introInt(pregunta) {
    let r = parseInt(prompt(pregunta));
    while (isNaN(r)) {
        alert("No has introduït cap número")
        r = parseInt(prompt(pregunta));
    }
    return r;
}

//Retorna un nom complet amb la primera majuscula y 
export function nomCorrecte(nom, cognom) {
    let primeraLletra = nom.charAt(0).toUpperCase();
    let altresLletres = nom.substring(1).toLowerCase();
    nom = primeraLletra + altresLletres;
    primeraLletra = cognom.charAt(0).toUpperCase();
    altresLletres = cognom.substring(1).toLowerCase();;
    cognom = primeraLletra + altresLletres;
    return (nom + " " + cognom);
}

//Retorna true o false si la frase inclou una paraula
export function InclouParaula(frase, paraula) {
    frase = "Les coses clares i la xocolata espessa";
    paraula = "XoCoLaTa";
    frase = frase.toUpperCase();
    paraula = paraula.toUpperCase();
    let inclosa = frase.includes(paraula);
    return inclosa;
}

/*

Un any és de traspàs si és divisible entre 400, o si és divisible entre 4 però no entre 100.
Comprova-ho amb els anys 2000 (sí), 2020 (sí), 2100 (no), 2222 (no).

*/

// CONDICIONAL TERNARI  let v = (t < 20) ? -1 : (t > 24 ? +1 : 0);

export function taulesMult() {
    for (let i = 1; i <= 10; ++i) {
        let linia = "";
        for (let j = 1; j <= 10; ++j) {
            linia += i * j;
        }
        console.log(linia);
    }
}

export function invertirNumero(n) {
    let resultat = "";
    do {
        resultat += n % 10;
        n = Math.floor(n / 10);
    } while (n > 0);
    return resultat;
}

//Pasant un string, retorna l'inversa d'aquest
export function invertirString(s) {
    let i, l = s.length - 1;    // Les variables 'i' i 'l' s'utilitzen diverses vegades

    // Llegir la frase al revés
    for (i = l; i >= 0; i--) {
        console.log(s.charAt(i));
    }

    // Crear un nou string amb les lletres al revés
    let s2 = "";
    for (i = l; i >= 0; i--) {
        s2 += s.charAt(i);
    }
    return s2;
}

export function textASigles(s) {
    let cActual, cAnterior;
    let resultat = "";

    // Eliminar possibles espais inicials i/o finals i convertir a majúscules
    s = s.trim().toUpperCase();
    // Escriure la primera lletra
    resultat += s.charAt(0);
    // A partir del segon caràcter...
    for (let i = 1; i < s.length(); i++) {
        cActual = s.charAt(i);
        cAnterior = s.charAt(i - 1);
        // ... escriure'l si no és un espai i l'anterior sí
        // Aquest mètode funciona encara que hi hagi més d'un espai entre les paraules
        if (cActual != ' ' && cAnterior == ' ') resultat += cActual;
    }
    return resultat;
}

let edats = [35, 9, 18];
export function ordreXY(x, y) {
    if (x < y) return -1;
    else if (x > y) return 1;
    else return 0;
    // return x - y;    // Opció més simplificada
}

edats.sort();          // edats = [18, 35, 9];
edats.sort(ordreXY);   // edats = [9, 18, 35];
edats.reverse();       // edats = [35, 18, 9];


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

//Crea un array bidimensional aleatori
export function crearArrayRandom(filas, columnas, max = 9) {
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

/**
 * Contar cuántos elementos cumplen una condición (condicion es una funcion que devuelve true o false)
 * @param {object[]} arr 
 * @param {(condicionPapa: object) => boolean} condicion 
 * @returns {number}
 */
export function contarCondicion(arr, condicion) {
    let contador = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (condicion(arr[i][j])) contador++;
        }
    }
    return contador;
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

/*
const mapa = new Map()

mapa.set("algo", 1)
mapa.set("algo2", "tachyon")
mapa.set("algo3", "piwter-san")

mapa.delete("algo3")

const algo = mapa.get("algo")
const algo2 = mapa.get("algo2")
const algo3 = mapa.get("algo3")

console.log(algo, algo2, algo3)  // 1, "tachyon", undefined

const set = new Set([1, 2, 3, 4, 4, 4, 5, 6, 7]);
// Set(7) [ 1, 2, 3, 4, 5, 6, 7 ]

set.clear(); // Set []
set.has(1); // false
set.add(2); // Set(1) [ 2 ]
set.add(1); // Set(2) [ 2, 1 ]

set.size; // 2
set.delete(2); // Set(1) [ 1 ]

*/
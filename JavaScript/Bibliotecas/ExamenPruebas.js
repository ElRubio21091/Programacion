"use strict"


function validarPassword(pass) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(pass);
}

let password = prompt("Introduce la contraseña con 8 caracteres y un mínimo de 1 mayuscula, 1 minúscula y un numero:");

if (!validarPassword(password)) {
    console.log("Contraseña incorrecta");
} else {

    let opcion;

    do {
        console.log("1. Contar palabra en un texto");
        console.log("2. Estadísticas de números");
        console.log("3. Juego del sorteo");
        console.log("4. Matriz de temperaturas");
        console.log("0. Salir");

        opcion = prompt("Elige una opción:");

        switch (opcion) {
            case "1":
                contarPalabra();
                break;
            case "2":
                estadisticas();
                break;
            case "3":
                sorteo();
                break;
            case "4":
                temperaturas();
                break;
        }

    } while (opcion !== "0");
}


function contarPalabra() {
    let texto = prompt("Introduce un texto").toLowerCase();
    let palabra = prompt("Introduce la palabra").toLowerCase();

    let palabras = texto.split(" ");
    let contador = 0;

    for (let p of palabras) {
        if (p === palabra) contador++;
    }

    console.log("Aparece", contador, "veces");
}

function estadisticas() {
    let numeros = [];
    let entrada;

    try {
        while (true) {
            entrada = prompt("Introduce un número o 'fin':");
            if (entrada === "fin") break;

            let num = parseInt(entrada);
            if (isNaN(num)) throw new Error("No es número");

            numeros.push(num);
        }

        let suma = numeros.reduce((a, b) => a + b, 0);
        let max = Math.max(...numeros);
        let min = Math.min(...numeros);
        let media = suma / numeros.length;

        console.log("Suma:", suma);
        console.log("Media:", media);
        console.log("Máximo:", max);
        console.log("Mínimo:", min);

    } catch (e) {
        console.log("Error:", e.message);
    }
}

function sorteo() {
    let usuario = [];

    try {
        while (usuario.length < 5) {
            let n = parseInt(prompt("Número entre 1 y 50:"));
            if (isNaN(n) || n < 1 || n > 50) throw new Error("Número inválido");
            if (usuario.includes(n)) throw new Error("Número repetido");

            usuario.push(n);
        }

        let premio = [];
        while (premio.length < 5) {
            let n = Math.floor(Math.random() * 50) + 1;
            if (!premio.includes(n)) premio.push(n);
        }

        let aciertos = 0;
        for (let n of usuario) {
            if (premio.includes(n)) aciertos++;
        }

        console.log("Tus números:", usuario);
        console.log("Sorteo:", premio);
        console.log("Aciertos:", aciertos);

    } catch (e) {
        console.log("Error:", e.message);
    }
}


function temperaturas() {
    let matriz = [];
    let ciudades = 3;
    let dias = 4;

    for (let i = 0; i < ciudades; i++) {
        matriz[i] = [];
        for (let j = 0; j < dias; j++) {
            let temp = parseFloat(prompt(`Ciudad ${i + 1}, día ${j + 1}:`));
            matriz[i][j] = temp;
        }
    }

    for (let i = 0; i < ciudades; i++) {
        let suma = 0;
        for (let j = 0; j < dias; j++) {
            suma += matriz[i][j];
        }
        console.log("Media ciudad", i + 1, ":", suma / dias);
    }
}


const llista = [
  'Frisona, 640',
  'Llemosina 710',
  'Bruna-670',
  'Catalana , 662',
  'Albera - 627',
  'Albera ,-, 650',
  'Llemosina -680',
  'Catalana ,695',
  'Catalana  600',
  'Bruna- 750'
];



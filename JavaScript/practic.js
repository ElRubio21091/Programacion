"use strict"

//EXERCICI 1

let filas = 4
let columnas = 4

// FUNCIONS EX1
function compte(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 9) {
                if (i == 0 || i == filas - 1) {
                    return true
                }
                if (j == 0 || j == filas - 1) {
                    return true
                }
            }
            if (arr[i][j] < 4) {
                if (i == 0 || i == filas - 1) {
                    return true
                }
                if (j == 0 || j == filas - 1) {
                    return true
                }
            }
        }
        return false
    }

}
function ordenar(arr){
    let array=[]
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (j == 0 || j == filas - 1 || i==0 || i==filas-1) {
                let num=arr[i][j]
                array.push(num)
            }
            }
        }
    array.sort()
    array.sort(ordreXY)
    array.reverse()
    return array
}

function ordreXY(x, y) {
  if (x < y) return -1;
  else if (x > y) return 1;
  else return 0;
  // return x - y;    // Opció més simplificada
}

function crearArray2dRandom(filas, columnas, max = 9) {
    let arr = [];
    for (let i = 0; i < filas; i++) {
        arr[i] = [];
        for (let j = 0; j < columnas; j++) {
            arr[i][j] = Math.floor(Math.random() * (max + 1)); // 0 a max
        }
    }
    return arr;
}


//CODI PROGRAMA EX 1
const arr = crearArray2dRandom(filas, columnas, 9)
console.table(arr)
let cuidao = compte(arr)
if (cuidao == false) {
    alert("El cercat funciona correctament")
}
else if (cuidao == true) {
    alert("ALERTA! Cal revisar les tensions del cercat")
}
let ordre=ordenar(arr)
alert(ordre)

//EXERCICI 2

const llista = ['Frisona, 640', 'Llemosina 710', 'Bruna-670', 'Catalana , 662', 'Albera - 627',
    'Albera ,-, 650', 'Llemosina -680', 'Catalana ,695', 'Catalana  600', 'Bruna- 750']
let pattern=/^[A-Z][a-zA-Z]{3,9}[.-]{2}\d{3}$/

try {
    for (let i=0;i<llista.length;i++){
        let element = llista[i]
        if (pattern.test(element)==false){
            throw new Error("Error en les dades")
        }

    }
    
}
catch{
    alert("Error en les dades!")
}

const resultado = [];

for (let i = 0; i < llista.length; i++) {
  const limpio = llista[i].replace(/[, -]+/g, ' ').trim();

  let partes = limpio.split(' ');
  let peso = partes.pop();
  let nombre = partes.join(' ');
  let nombreEntero= nombre+": "+peso
  resultado.push(nombreEntero);
}

console.log(resultado);






//EXERCICI 3 

const ciutats = ['Barcelona', 'Girona', 'Lleida', 'Tarragona', 'Saragossa', 'Terol']

console.log(ciutats)
const distancies = [
    [0, 100, 156, 98, 296, 409],
    [100, 0, 256, 198, 396, 509],
    [156, 256, 0, 91, 140, 319],
    [98, 198, 91, 0, 231, 311],
    [296, 396, 140, 231, 0, 181],
    [409, 509, 319, 311, 181, 0]
]
lejania(ciutats, distancies)

function lejania(ciutats, distancies) {
    let ciutat1 = prompt("Digues la ciutat 1 de la que vols veure la distancia")
    let ciutat2 = prompt("Digues la ciutat 2 de la que vols veure la distancia")

    let distancia = distancies[ciutats.indexOf(ciutat1)][ciutats.indexOf(ciutat2)]
    alert("La distancia és: " + distancia)

}
"use strict"
let vaixell=20
let moviments=0
let joc=true
let canvi=false
let TableroJugador=  [["","","","","","","",""],
                      ["","","","","","","",""],
                      ["","","","","","","",""],
                      ["","","","","","","",""],
                      ["","","","","","","",""],
                      ["","","","","","","",""],
                      ["","","","","","","",""],
                      ["","","","","","","",""],]

const Tablero=[["A","B","A","A","B","A","A","B"],
               ["A","B","A","A","A","A","A","A"],
               ["A","A","A","B","A","A","B","A"],
               ["A","A","A","A","A","A","A","A"],
               ["A","B","B","B","A","B","A","A"],
               ["B","A","A","A","A","B","A","B"],
               ["B","A","A","A","A","A","A","B"],
               ["B","A","B","B","B","B","A","A"]]


do {
    console.table(TableroJugador)
    let coses = demanarCoses()
    if (coses==false) {
        alert("Moviment invàlid!");
        continue;
    }
    let fila = coses[1]
    let columna=coses[0]
    canvi=afegirTauler(fila, columna)
    if (canvi==2) {
        alert("Ja has posat aquesta posició!");
        continue;
    }
    if (canvi==true && vaixell>0){
        vaixell=vaixell-1
        alert("Has tocat un vaixell, queden "+vaixell+" vaixells")
    }
    if (canvi==false){
        alert("Aigua!")
    }
    if (vaixell==0){
        alert("Victoria! Has fet "+moviments+" moviments")
        joc=false
    }
    moviments++
} while (joc);





function demanarCoses() {
    let j1f = prompt("A quina fila y columna vols buscar? (fila = ABCDEFGH, columna = 123455678, Ex: A3)")
    let lletra = j1f.charAt(0)
    let num=parseInt(j1f.charAt(1))
    let resposta=[]
    if (num<1 || num>8 || isNaN(num)) {
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
    if (Tablero[j1f][j1c]==TableroJugador[j1f][j1c]){
        return 2
    }
    if (Tablero[j1f][j1c] == "A") {
        TableroJugador[j1f][j1c]="A"
        return false
    }
    else{
        TableroJugador[j1f][j1c]="B"
        return true
    }
}


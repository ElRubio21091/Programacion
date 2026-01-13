"use strict"

/*
Tenim un array amb els pals de la baralla espanyola (Ors, Copes, Espases i Bastos) i un array amb les possibles figures
(1, 2, 3, 4, 5, 6, 7, Sota, Cavall i Rei). Els tres últims valen ½ punt.
S'ha de crear un array combinant tots els pals amb tots els valors i barrejar aquest array.
Ha de preguntar al jugador si vol treure carta o si es planta.
Si vol carta, ha treure la primera carta, sumar el valor a les cartes que té el jugador i mostrar-lo.
Si el jugador es passa, perd.
Si el jugador es planta, la banca ha d'anar traient cartes fins a millorar la puntuació del jugador,
igualar-la si el jugador ha fet 7½ o fins que es passi.
Si la banca empata, guanya.
Al final ha de mostrar un missatge indicant qui ha guanyat.
*/

const pals = ["Ors", "Copes", "Espases", "Bastos"];
const figures = [1, 2, 3, 4, 5, 6, 7, "Sota", "Cavall", "Rei"];
let game = true
let comptador = 0
let carta = 0
let resultatIa=false

do {
    carta = joc();
    comptador += carta
    alert("Total: " + comptador)
    game = pregunta()
} while (game);

resultatIa=iaCartas(comptador)
if (resultatIa==false){
    alert("Has perdut!")
}
if (resultatIa==true){
    alert("Has guanyat!")
}

function escollirCarta() {
    let pal = pals[Math.floor(Math.random() * pals.length)];
    let figura = figures[Math.floor(Math.random() * figures.length)];
    let valorFigura = 0;

    if (isNaN(figura)) {
        valorFigura = 0.5;
    } else {
        valorFigura = figura;
    }

    return [pal, valorFigura, figura];
}

function joc() {
    let carta = escollirCarta();
    let valorCarta = carta[1];
    let tipusCarta = carta[0];
    let figura = carta[2];
    alert("Has tret un " + figura + " de " + tipusCarta);
    return valorCarta
}

function pregunta() {
    let macarrons = 0
    do {
        let pregunta = prompt("Escriu si per agafar un altre carta\nEscriu no per plantarte").toUpperCase()
        if (pregunta == "SI") {
            return true
        }
        else if (pregunta == "NO") {
            return false
        }
        else {
            alert("No t'he entes");
            macarrons == 1
        }
    } while (macarrons == 1)

}

function iaCartas(comptador) {
    let comptadorIA = 0
    if (comptador > 7.5) {
        return false
    }
    else{
        while (comptador > comptadorIA) {
            let pal = pals[Math.floor(Math.random() * pals.length)];
            let figura = figures[Math.floor(Math.random() * figures.length)];
            let valorFigura = 0;

            if (isNaN(figura)) {
                valorFigura = 0.5;
            } else {
                valorFigura = figura;
            }
            comptadorIA+=valorFigura
            alert("La IA ha tret un "+ figura +" de "+pal)
        }
    }
    if (comptadorIA<=7.5 && comptadorIA>comptador){
        return false
    }
    else if (comptadorIA==7.5 && comptadorIA==comptador){
        return false
    }
    else{
        return true
    } 
}
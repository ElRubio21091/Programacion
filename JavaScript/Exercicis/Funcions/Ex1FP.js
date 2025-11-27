"use strict"
let caracters = ""
const Caracters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let caracter2 = ""
alert("De quina lletra a quina lletra vols que es generi?")
caracters = prompt("Lletra 1: ");
caracter2 = prompt("Lletra 2: ");
let pos1 = Caracters.indexOf(caracters);
let pos2 = Caracters.indexOf(caracter2);
let primer = Math.min(pos1, pos2);
let ultim = Math.max(pos1, pos2);
lletraAleatoria(ultim, primer)


function lletraAleatoria(ultim, primer) {
    let IndexAleatoria = Math.floor(Math.random() * (ultim - primer));
    IndexAleatoria = IndexAleatoria + primer
    alert(Caracters[IndexAleatoria]);
}
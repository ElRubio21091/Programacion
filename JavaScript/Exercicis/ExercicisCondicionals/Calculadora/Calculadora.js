"use strict";

// Inputs per introduir l'edat
const numero1 = document.getElementById("num1");
const numero2 = document.getElementById("num2");
// Botó per executar l'aplicació
const bExecsum = document.getElementById("execsum");
const bExecres = document.getElementById("execres");
const bExecdiv = document.getElementById("execdiv");
const bExecmult = document.getElementById("execmult");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExecsum.addEventListener("click", executarsum);
bExecres.addEventListener("click", executarres);
bExecdiv.addEventListener("click", executardiv);
bExecmult.addEventListener("click", executarmult);

function executarsum() {
    let val1 = numero1.value;
    let val2 = numero2.value;
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    let val3 = val1+val2;
    terminal.innerHTML = "La suma dona: "+val3;
}
function executarres() {
    let val1 = numero1.value;
    let val2 = numero2.value;
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    let val3 = val1-val2;
    terminal.innerHTML = "La resta dona: "+val3;
}
function executardiv() {
    let val1 = numero1.value;
    let val2 = numero2.value;
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    let val3 = val1/val2;
    terminal.innerHTML = "La divisió dona: "+val3;
}
function executarmult() {
    let val1 = numero1.value;
    let val2 = numero2.value;
    val1=parseFloat(val1);
    val2=parseFloat(val2);
    let val3 = val1*val2;
    terminal.innerHTML = "La multiplicació dona: "+val3;
}
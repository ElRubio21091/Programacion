"use strict";

// Inputs per introduir l'edat
const iEdat = document.getElementById("edat");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

function executar() {
    let edat = iEdat.value;
    let text="";
    edat = parseInt(edat);
    if (edat>=18){text=text+"Pots conduir un cotxe. "}
    if (edat<=16 || edat>=67){text=text+"No tens l'edat favorable per treballar. "}
    if (edat<3){text=text+"Necessites anar a la guarderia. "}
    if (edat>=18 && edat<=24){text=text+"Pots fer un CFGS. "}
    terminal.innerHTML = text;
}
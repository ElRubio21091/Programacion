"use strict";

// Inputs per introduir el nom i l'edat
const Temperatura = document.getElementById("temperatura");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    let temperaturA = Temperatura.value;
    temperaturA=parseFloat(temperaturA)
    let estatCalefaccio=temperaturA<20?-1:(temperaturA>24?1:0);
    
    if (estatCalefaccio==0){terminal.innerHTML = "Què bé! Estem estalviant energia!";}
    else if (estatCalefaccio==-1){terminal.innerHTML="Calefacció encesa"}
    else if (estatCalefaccio==1){terminal.innerHTML="Aire condicionat encès"}
}
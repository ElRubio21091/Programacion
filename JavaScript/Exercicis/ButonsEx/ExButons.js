"use strict";
const iFrase = document.getElementById("Frase");
const iParaula = document.getElementById("Paraula");
// Botó per executar l'aplicació
const bExec = document.getElementById("exec");
// Element on mostrar el resultat
const terminal = document.getElementById("terminal");

// Quan es fa clic en el botó 'exec' es crida la funció 'executar()'
bExec.addEventListener("click", executar);

// Funció que executa l'aplicació
function executar() {
    let frase = iFrase.value;
    let Paraula = iParaula.value.toLowerCase();
    let longitutparaula= Paraula.length;
    let part1=frase.toLowerCase().indexOf(Paraula+longitutparaula);
    let part2=frase.toLowerCase().lastIndexOf(Paraula);
    let fraseRetallada= frase.substring(part1,part2);
    terminal.innerHTML ="La frase: "+frase+" retallada amb la paraula repetida "+Paraula+" és: "+ fraseRetallada;
}
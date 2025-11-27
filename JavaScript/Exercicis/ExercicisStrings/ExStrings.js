"use strict"
const PARAULA = "LLETRES";
const LLETRES = "TRWAGMYFPDXBNJZSQVHLCKE";
let nomPropim = "raul";
let nomPropiM = "RUBIO";
let frasePerRetallar = "Neko, tots som fans de neko, neko per sempre";
let frase = prompt("Posa la frase: ");
let fraseRepetida = "Nekomata es top tier, Nekomata best character";
let part1= frasePerRetallar.toLowerCase().indexOf("neko");
let part2 = frasePerRetallar.toLowerCase().lastIndexOf("neko");
let fraseResultant= frasePerRetallar.substring(part1+4,part2);
let paraulaPerBuscar = prompt("Quina paraula vols buscar?: ");
let verificacio = frase.includes(paraulaPerBuscar);
let fInicial=frase.startsWith(paraulaPerBuscar,0);
let nomCorrecte = nomPropim.toUpperCase().substring(0,1)+nomPropim.substring(1) + " "+ nomPropiM.substring(0,1)+nomPropiM.toLowerCase().substring(1);
let lletres10_20 = LLETRES.substring(9,19);
let lletres10_final = LLETRES.substring(9);
let numParaules = PARAULA.length;
if (verificacio==true){alert("La frase "+frase+" conté la paraula "+ paraulaPerBuscar) }
else{alert("La frase "+frase+" no conté la paraula "+ paraulaPerBuscar) }

if (fInicial==true){alert("La frase "+frase+" comença amb la paraula "+ paraulaPerBuscar) }
else {alert("La frase "+frase+" no comença amb la paraula "+ paraulaPerBuscar) }
alert(numParaules);
alert(LLETRES.charAt(9));
alert(lletres10_20);
alert(lletres10_final);
alert(nomCorrecte);
alert("La primera posició de la paraula Nekomata a la frase: "+fraseRepetida+ " és a la posició " + fraseRepetida.indexOf("Nekomata") +" i l'última és la posició " + fraseRepetida.lastIndexOf("Nekomata"))
alert("La frase: "+frasePerRetallar+" retallada seria: "+fraseResultant);
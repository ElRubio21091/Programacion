"use strict"

let codiO="ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
let codiE="BCDEFGHIJKLMNÑOPQRSTUVWXYZA"
let lletra="L"

let frase=prompt("Posa una frase per encriptar: ");
let fraseEncriptada=encertarFrase(codiO,codiE,frase);
console.log(fraseEncriptada)


function encriptarLletres(codiE,codiO,lletra){
    lletra=lletra.toUpperCase();
    let pos = codiO.indexOf(lletra);
    let le=""
    if (pos==-1){
        le ="_"
    }
    else{
        le=codiE.charAt(pos);
    }
    return le
}

function encertarFrase(codiO,codiE,frase){
    let fraseE="";
    for (let i=0;i<frase.length;i++){
        fraseE+=encriptarLletres(codiO,codiE,frase.charAt(i));
    }
    return fraseE
}
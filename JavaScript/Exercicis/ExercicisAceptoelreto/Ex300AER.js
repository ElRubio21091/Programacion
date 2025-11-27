"use strict"

let numParaules=prompt()
contarVocals(numParaules)

function contarVocals(numParaules){
    for (let i=0;i<numParaules;i++){
        let paraula=prompt();
        paraula=paraula.toUpperCase();
        if (paraula.includes("A") && paraula.includes("E") && paraula.includes("I") && paraula.includes("O") && paraula.includes("U")){
            console.log("SI")
        }
        else{
            console.log("NO")
        }
    }
}

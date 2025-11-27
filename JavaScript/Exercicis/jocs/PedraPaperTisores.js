"use strict"

let pregunta=""

do{
    jugar()
    pregunta=prompt("Si vols parar de jugar, escriu no")
    pregunta=pregunta.toLowerCase()
} while (pregunta!="no")


function random(){
    let eleccioRival=Math.round(Math.random()*4)
    while (eleccioRival==4 || eleccioRival==0){
        eleccioRival=Math.floor(Math.random()*4)
    }

    switch(eleccioRival){
        case 1:
            return "PEDRA";
        case 2:
            return "PAPER"
        case 3:
            return "TISORES"
    }
}

function jugar(){
    let eleccio=prompt("Pedra, paper o tisores?");
    eleccio=eleccio.toUpperCase()
    let eleccioRival=random();
    switch(eleccio){
        case "PEDRA":
            switch(eleccioRival){
                case "PEDRA":
                    alert("Pedra paper tisores! Has tret pedra y jo he tret pedra, hem empatat!")
                    return
                case "TISORES":
                    alert("Pedra paper tisores! Has tret pedra y jo he tret tisores, has guanyat!")
                    return
                case "PAPER":
                    alert("Pedra paper tisores! Has tret pedra y jo he tret paper, has perdut!")
                    return
                default:
                    alert("Has de posar pedra, paper o tisores!")
            }
        case "PAPER":
            switch(eleccioRival){
                case "PEDRA":
                    alert("Pedra paper tisores! Has tret paper y jo he tret pedra, has guanyat!")
                    return
                case "TISORES":
                    alert("Pedra paper tisores! Has tret paper y jo he tret tisores, has perdut!")
                    return
                case "PAPER":
                    alert("Pedra paper tisores! Has tret paper y jo he tret paper, hem empatat!")
                    return
                default:
                    alert("Has de posar pedra, paper o tisores!")
            }
        case "TISORES":
            switch(eleccioRival){
                case "PEDRA":
                    alert("Pedra paper tisores! Has tret tisores y jo he tret pedra, has perdut!")
                    return
                case "TISORES":
                    alert("Pedra paper tisores! Has tret tisores y jo he tret tisores, hem empatat!")
                    return
                case "PAPER":
                    alert("Pedra paper tisores! Has tret tisores y jo he tret paper, has guanyat!")
                    return
                default:
                    alert("Has de posar pedra, paper o tisores!")
            }
    }
}
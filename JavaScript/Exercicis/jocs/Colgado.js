"use strict"

let arrayPalabras = ["Matikanefukukitaru", "AgnesTachyon", "MejiroRyan", "WinningTiquet", "SakuraBakushin", 
    "HaruUrara", "MatikaneFukutitaru", "NiceNature", "KingHalo", "GoldShip", "SuperCrek", "MayanoTopGun", 
    "AirGroove", "ElCondorPasa", "GrassWonder", "DaiwaScarlett", "Vodka", "MeishoDoto", "Marusenky", 
    "SpecialWeek", "GoldCity", "FujiKiseki", "HishiAmazon", "SeiunSky", "NaritaBrian", "SmartFalcon", 
    "NaritaTaishin", "CurrenChan", "TokaiTeio", "MejiroMCQueen", "BiwaHayahide", "MihonoBourbon", 
    "TmOperaO", "RiceShower", "SymboliRudolf", "TaikiShuttle", "OguriCap", "SilenceSuzuka"]
    
let palabra = ""
let intents = 10;
let lletresdites = "";
let primerTurn = true;
let paraulaPerEsbrinarr = ""



joc();

function ParaulaPerEsbrinar(palabra) {

    let ParaulaPerEsbrinar = "_".repeat(palabra.length)
    return ParaulaPerEsbrinar
}

function joc() {
    while (intents != 0) {
        if (intents == 10) {
            primerTurn = true
        }
        if (intents != 10) {
            primerTurn = false
        }
        if (primerTurn == true) {
            palabra = arrayPalabras[Math.floor(Math.random() * arrayPalabras.length)];
            palabra = palabra.toUpperCase()
            paraulaPerEsbrinarr = ParaulaPerEsbrinar(palabra)
        }

        alert("Tens " + intents + " intents per esbrinar la paraula " + paraulaPerEsbrinarr);
        let pregunta = prompt("Escriu \"si\" si vols endevinar la paraula o cualsevol altre cosa per continuar")
        if (pregunta.toUpperCase() == "SI") {
            let adivinanza = prompt("Quina paraula és? ")
            if (adivinanza.toUpperCase() == palabra) {
                alert("Correcte!")
                return
            }
            if (adivinanza.toUpperCase() != palabra) {
                alert("Has perdut! La paraula era " + palabra)
                return
            }
        }
        let lletra = prompt("Quina lletra vols dir? Actaulment has dit: " + lletresdites);
        lletra = lletra.toUpperCase()
        let patron = /^[a-zA-Z]$/.test(lletra);
        if (patron == true) {
            lletresdites = lletresdites + lletra + ", "
            for (let i = 0; i < paraulaPerEsbrinarr.length; i++) {
                if (palabra[i] == lletra) {
                    paraulaPerEsbrinarr = paraulaPerEsbrinarr.slice(0, i) + lletra + paraulaPerEsbrinarr.slice(i + 1);
                }
            }
            intents = intents - 1
        }
    }
}
"use strict"
const Majuscules = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
const Minuscules = "abcdefghijklmnñopqrstuvwxyz"
const Numeros = "0123456789"




let password = prompt("Posa una contrasenya amb \n Mínim 8 caràcters\n Mínim 1 majúscula (A-Z) \n Mínim 1 minúscula (a-z) \n Mínim 1 digit (0-9)")
let encerta = contrasenya(password)
if (encerta == true) {
    Menu()
}

function contrasenya(password) {
    let majuscula = 0
    let minuscula = 0
    let numero = 0
    for (let i = 0; password.length; i++) {
        if (Majuscules.includes(password.charAt(i))) {
            majuscula = 1;
        }
        if (Minuscules.includes(password.charAt(i))) {
            minuscula = 1;
        }
        if (Numeros.includes(password.charAt(i))) {
            numero = 1;
        }
    }
    if (majuscula == 1 && minuscula == 1 && numero == 1) {
        return true
    }
    if (majuscula != 1 || minuscula != 1 || numero != 1) {
        return false
    }
}


function Menu() {
    let sortida = 0
    while (sortida != 1) {
        let opcions = prompt("A-Valoració d'ususari.\n B-Buscar paraula.\n C-Participar.\n Z-Sortir del programa")
        switch (opcions) {
            case "A":
                return opcioA()
            case "B":

                return opcioB()
            case "C":
                return opcioC(num1, num2, num3)
            case "Z":
                let num1 = escollirNum()
                let num2 = escollirNum()
                let num3 = escollirNum()
                sortida = 1
                return
            default:
                alert("Opcio invalida");
                return

        }
    }

}

function opcioA() {
    let hores = parseInt(prompt("Quantes hores dediques a escoltar música"))
    if (isNaN(hores)) {
        alert("Cuantitat invàlida");
    }
    if (10 >= hores >= 0) {
        return "Casual";
    }
    if (30 >= hores >= 11) {
        return "Fan";
    }
    if (60 >= hores >= 31) {
        return "Superfan";
    }
    if (hores > 60) {
        return "Adicte";
    }
}

function opcioB() {
    let inclosa = 0
    let conteig = 0
    let surt = 0
    let lletraCancion = prompt("Posa la lletra de la cançó: ");
    let paraulaRepetida = prompt("Quina paraula vols buscar a la lletra de la cançó")
    lletraCancion = frase.toUpperCase();
    paraulaRepetida = paraula.toUpperCase();
    while (surt != 1) {
        inclosa = frase.indexOf(lletraCancion, paraula);
        if (inclosa == -1) {
            surt = 1
        }
        if (inclosa != -1) {
            lletraCancion = lletraCancion.substring(inclosa)
            conteig = 1
        }
    }
    alert("La paraula " + paraulaRepetida + " apareix " + conteig + " vegades")
}

function opcioC(num1, num2, num3) {
    let aleatori = 0
    let intents = 0
    while (surt != 1) {
        aleatori = Math.round(Math.random() * 99)
        intents += 1
        let surt1 = 0
        let surt2 = 0
        let surt3 = 0

        if (aleatori == num1 && surt1 == 0) {
            alert("Has trigat " + intents + " intents en treure un " + num1)
            surt1 = 1
        }
        if (aleatori == num2 && surt2 == 0) {
            alert("Has trigat " + intents + " intents en treure un " + num2)
            surt2 = 1
        }
        if (aleatori == num3 && surt3 == 0) {
            alert("Has trigat " + intents + " intents en treure un " + num3)
            surt3 = 1
        }
        if (surt1 == 1 && surt2 == 1 && surt3 == 1) {
            alert("Has trigat " + intents + " intents en treure els tres")
        }
    }

}

function escollirNum() {
    let num1 = 0
    let numerosEscollits = 0
    do {
        num1 = prompt("Posa un número del 1 al 99");
        if (99 >= num1 > 0) {
            numerosEscollits = 0
            return num1
        }
        if (nu1m == 0 || num1 > 99 || isNaN(parseInt(num1))) {
            alert("Numero invàlid")
            numerosEscollits = 1

        }
    } while (numerosEscollits != 0)
}
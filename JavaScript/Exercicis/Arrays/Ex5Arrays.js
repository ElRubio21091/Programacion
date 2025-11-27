"use strict"
let cuantNumeros = 1

while (cuantNumeros != 0) {
    let uno = 0
    let dos = 0
    let tres = 0
    let cuatre = 0
    let cinco = 0
    let seis = 0
    let siete = 0
    let ocho = 0
    let nueve = 0

    cuantNumeros = parseInt(prompt())
    let array = prompt().trim().split(/\s+/)
    for (let i = 0; array.length > i; i++) {
        let num = array.at(i)
        switch (num) {
            case "1":
                uno += 1
                break
            case "2":
                dos += 1
                break
            case "3":
                tres += 1
                break
            case "4":
                cuatre += 1
                break
            case "5":
                cinco += 1
                break
            case "6":
                seis += 1
                break
            case "7":
                siete += 1
                break
            case "8":
                ocho += 1
                break
            case "9":
                nueve += 1
                break
        }
    }
    let numerogrande = Math.max(uno, dos, tres, cuatre, cinco, seis, siete, ocho, nueve)

    switch (numerogrande) {
        case uno:
            console.log(1)
            break
        case dos:
            console.log(2)
            break
        case tres:
            console.log(3)
            break
        case cuatre:
            console.log(4)
            break
        case cinco:
            console.log(5)
            break
        case seis:
            console.log(6)
            break
        case siete:
            console.log(7)
            break
        case ocho:
            console.log(8)
            break
        case nueve:
            console.log(9)
            break
    }
}
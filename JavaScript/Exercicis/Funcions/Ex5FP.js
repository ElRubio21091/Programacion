"use strict"

let mes = parseInt(prompt("Introdueix número del mes (1-12)"));
let any = parseInt(prompt("Quin any és?: "))
// TODO: verificar NaN !!!
console.log(dies(mes, any))
function dies(mes, any) {
    if (mes >= 1 && mes <= 12) {
        if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
            return 31;
        else if (mes == 4 || mes == 6 || mes == 9 || mes == 11)
            return 30;
        else {
            if (any % 400 == 0 || (any % 4 == 0 && any % 100 != 0))
                return 29;
            else
                return 28;
        }
    } else {
        return -1;
    }
}


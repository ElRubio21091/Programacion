// DIES MES
function diesMes() {
    mostrarDiesMes(diesMes(1, 2000), 1, 2000);
    mostrarDiesMes(diesMes(2, 2020), 2, 2020);
    mostrarDiesMes(diesMes(4, 2100), 4, 2100);
    mostrarDiesMes(diesMes(2, 2222), 2, 2222);
}

function diesMes(mes, any) {
    if (mes >= 1 && mes <= 12) {
        if (mes == 1 || mes == 3 || mes == 5 || mes == 7 || mes == 8 || mes == 10 || mes == 12)
            return 31;
        else if (mes == 4 || mes == 6 || mes == 9 || mes == 11)
            return 30;
        else {
            if (esAnyTraspas(any)) return 29;
            else return 28;
        }
    } else {
        return -1;
    }
}

function mostrarDiesMes(dies, mes, any) {
    if (dies == -1) alert("El mes ha d'estar entre 1 i 12");
    else alert("El mes " + mes + " de l'any " + any + " te " + dies + " dies");
}
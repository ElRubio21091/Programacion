// CONVERTIR SEGONS
function convertirSegons() {
    let segons = introIntMinMax("Introdueix els segons: ", 0, 359999);
    let hms = formatarHMS(segons);
    mostrarHMS(segons, hms);
    // Les dues últimes línies es poden juntar en una:
    // mostrarHMS(segons, formatarHMS(segons));
}

// Introduir un número enter
function introInt(pregunta) {
    let valor = parseInt(prompt(pregunta));
    while (isNaN(valor)) {
        alert("Error: has d'introduir un número enter");
    }
    return valor;
}

// Introduir un número enter entre dos valors
function introIntMinMax(pregunta, min, max) {
    let valor;

    if (min > max) {
        let t = min;
        min = max;
        max = t;
    }

    valor = introInt(pregunta);
    while (valor < min || valor > max) {
        alert("Error: has d'introduir un número entre " + min + " i " + max);
        valor = introInt(pregunta);
    }

    return valor;
}

function formatarHMS(segonsTotals) {
    let minutsTotals;
    let segons, minuts, hores;

    segons = segonsTotals % 60;
    minutsTotals = Math.floor(segonsTotals / 60);
    minuts = minutsTotals % 60;
    hores = Math.floor(minutsTotals / 60);

    return dosDigits(hores) + ":" + dosDigits(minuts) + ":" + dosDigits(segons);
}

function dosDigits(n) {
    if (n < 10) return "0" + n;
    else return "" + n;
    // També es podria fer utilitzant l'operador ternari:
    // return n < 10 ? "0" + n : "" + n;
}

function mostrarHMS(segons, hms) {
    alert(segons + " segons equivalen a " + hms);
}
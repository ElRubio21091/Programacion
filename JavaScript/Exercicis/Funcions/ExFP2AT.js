// ÉS ANY DE TRASPÀS
function anyTraspas() {
    mostrarAnyTraspas(2000, esAnyTraspas(2000));
    mostrarAnyTraspas(2020, esAnyTraspas(2020));
    mostrarAnyTraspas(2100, esAnyTraspas(2100));
    mostrarAnyTraspas(2222, esAnyTraspas(2222));
}

function esAnyTraspas(any) {
    if (any % 400 == 0) return true;
    else if (any % 100 == 0) return false;
    else if (any % 4 == 0) return true;
    else return false;
}

function mostrarAnyTraspas(any, esTraspas) {
    alert("L'any " + any + (esTraspas ? "" : " NO") + " és any de traspàs");
}
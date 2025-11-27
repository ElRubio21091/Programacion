// DIA SETMANA
function diaSetmana() {
    alert(diaSetmana(1));
    alert(diaSetmana(3));
    alert(diaSetmana(6));
    alert(diaSetmana(8));
}

function diaSetmanaAmbSwitch(dia) {
    let ds;
    switch (dia) {
        case 1: ds = "Dilluns"; break;
        case 2: ds = "Dimarts"; break;
        case 3: ds = "Dimecres"; break;
        case 4: ds = "Dijous"; break;
        case 5: ds = "Divendres"; break;
        case 6: ds = "Dissabte"; break;
        case 7: ds = "Diumenge"; break;
        default: ds = "El dia ha d’estar entre 1 i 7";
    }
    return ds;
}

function diaSetmana(dia) {
    if (dia >= 1 && dia <= 7) {
        if (dia == 1) return "Dilluns";
        else if (dia == 2) return "Dimarts";
        else if (dia == 3) return "Dimecres";
        else if (dia == 4) return "Dijous";
        else if (dia == 5) return "Divendres";
        else if (dia == 6) return "Dissabte";
        else return "Diumenge";
    } else {
        return "El dia ha d’estar entre 1 i 7";
    }
}
"use strict"
/*Una funció que, passant-li l'any, retorni true o false depenent de si és any de traspàs o no.
A partir de l'any i del valor retornat, el programa ha de mostrar el missatge 
"L'any XXXX és any de traspàs" o  "L'any XXXX NO és any de traspàs".
*/

let any=0;
let veredicte = DirAny();

if (veredicte==false){
    alert("L'any "+any+" no és de traspàs")
}
if (veredicte==true){
    alert("L'any "+any+" és de traspàs")
}



function DemanarAny(any){
    do {
        any = prompt("Posa un any");
    } while (isNaN(any));

    return any;
}

function DirAny(){
    any=DemanarAny(any) 
    if (any%4==0 && any%100!=0){
        return true;
    }
    if (any%400==0){
        return true;
    }
    else {
        return false;
    }
}
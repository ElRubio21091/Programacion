"use strict"
/*Una funció que demani els segons fins que sigui un número enter entre 0 i 359999. Ha de retornar el valor introduït.
El valor retornat per la funció anterior s'ha de passar a una funció que generi i retorni un text amb les hores, minuts 
i segons en format "HH:MM:SS".
Convé crear una funció que, passant-li un número enter entre 0 i 99, retorni el valor amb dos dígits: 5 → "05".
No cal que aquesta funció comprovi si el valor que se li passa és correcte.
*/

let num=0;
HoresMinutsSegons();


function DemanarNumeros(num){
    do {
        num = prompt("Posa un número enter entre 0 i 359999");
    } while (num>359999 || num<0);

    return num;
}

function HoresMinutsSegons(){ 
    let segons = DemanarNumeros(num);
    let hores = Math.floor(segons/3600);
    let minuts = Math.floor(segons%3600/60);
    segons=(segons%3600)%60;
    if (segons<10){segons="0"+segons};
    if (minuts<10){minuts="0"+minuts};
    if (hores<10){hores="0"+hores};
    alert(hores+":"+minuts+":"+segons);
}
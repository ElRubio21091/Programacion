"use strict"


/*
Fes un programa que demani una frase, la converteixi en un array de paraules separant-les a partir dels 
espais i mostri cada paraula en una línia.
Modifica el programa de forma que separi els trossos quan trobi una coma i un espai.
Modifica el programa perquè mostri les paraules en una línia però en ordre invers.
*/

function demanarFrase(){
    let frase=prompt("Escriu una frase")
    let array=frase.split(", ")
    return array
}
let array=demanarFrase()
alert(array.reverse().join("-"))
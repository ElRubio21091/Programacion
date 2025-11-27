"use strict"

let casos=parseInt(prompt());

for (let i=0;i<casos;i++){
    let files=parseInt(prompt());
    let columnes=parseInt(prompt());
    console.log(((files+1)*columnes)+(files*(columnes+1)))
}


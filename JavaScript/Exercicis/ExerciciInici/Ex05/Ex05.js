//Fes un programa que calculi la hipotenusa d'un triangle rectangle i l'area d'un cercle 
// utilitzant constants i mètodes de la classe Math.
//Els valors de la base, l'altura i el radi han de ser variables.

let a = prompt("Costat a");
let b = prompt("Costat b");
let r = prompt("Inserta el radi");
let hipotenusa = Math.hypot(a,b);
let area = Math.PI*r**2; 
alert ("L'hipotenusa és: "+hipotenusa + "\n L'àrea és: "+area); //Enviant missatge
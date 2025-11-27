   // Variables globals
const bRadi = document.getElementById("Radi");
const bTriangle = document.getElementById("triangle");
const bMitjanes = document.getElementById("Mitjanes");
bRadi.addEventListener("click", Triangle);
bTriangle.addEventListener("click", Cercle);
bMitjanes.addEventListener("click", Mitjanes);

function Triangle() 
{
    let catet1=parseFloat(prompt("Introdueix el valor del catet 1: "))
    let catet2=parseFloat(prompt("Introdueix el valor del catet 2: "))
    alert("L'hipotenusa es: "+Math.hypot(catet1,catet2))
}

function Cercle() 
{
    let radi=parseFloat(prompt("Introdueix el valor del radi: "))
    alert("El perímetre és "+2*Math.PI*radi+" i l'àrea és "+Math.PI*radi**2)
}

function Mitjanes() 
{
    let notes=[]
    let pregunta = parseFloat(prompt("Cuantes UF vols (max 4)?"))
    while (pregunta>4 ||  pregunta<=0){pregunta = parseFloat(prompt("Cuantes UF vols (max 4)?"))}
    for (let i=0;i<=pregunta;i++)
    {
        let nota = parseFloat(prompt("Posa una nota"));
        notes.push(nota)
    }
    terminal.console.log("UF"+i+": ");
}

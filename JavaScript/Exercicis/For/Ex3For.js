"use strict"

//Utilitza un bucle for per generar un compte enrere començant en 10 i acabant en 0.
//Per fer que el programa esperi 1 segon entre cada iteració, pots utilitzar la comanda Thread.sleep(1000).
//Per poder utilitzar l'anterior comanda sense haver de gestionar possibles excepcions cal afegir throws 
// Exception al final de la definició de la funció main():
//public static void main(String[] args) throws Exception {

for (let i; i<=10;i++)
{
    Thread.sleep(1000);
    console.log(10-i);
}
package endevinar;

import java.util.Scanner;

public class EndevinarNumero {
    public static Scanner scan = new Scanner(System.in);
    public static void main(String[] args){
        String resposta;

        do {
            int comparacio;
            ModelEndevinar.reiniciarIntents();
            ModelEndevinar.generarNumAleatori();
            VistaEndevinar.mostrarMissatge("El numero generat és;" + ModelEndevinar.getNumAleatori());
            do {
                System.out.print("Escriu el numero de l'1 al 99");
                resposta= scan.nextLine();
                int num =Integer.parseInt(resposta);
                endevinar.ModelEndevinar.incrementarIntents();
                comparacio = ModelEndevinar.compararNumero(num);
                if (comparacio == 0) VistaEndevinar.mostrarMissatge("Has endevinat el numero en ");
            }
        } while();
        }
    }
}
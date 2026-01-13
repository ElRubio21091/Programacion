public class Clase1 {
    float notes=0f;
    float totalNotes=0f;
    float mitjana=0f;
    float suspes=0f;
    float nota=0f;
    int i=1;

    public static void main(String[] args)(){
        while (i!=0)
        {
            System.out.print("Introdueix una nota del 1 al 10 (0 per acabar): ");
            nota=Float.parseFloat(scan.nextLine());
            if (isNaN(nota)==true)
            {
                System.out.print("Inserta números del 1 al 10!");
            }
            if (nota==0 && isNaN(nota)==false)
            {
                System.out.print("Mitjana: "+mitjana);
                System.out.print("Suspesos: "+suspes);
                i=0;
            }
            else if (10>=nota && nota>0 && isNaN(nota)==false)
            {
                if (nota<5)
                {
                    suspes++;
                }
                notes=Float.parseFloat(String.valueOf(nota+notes));
                totalNotes=Float.parseFloat(String.valueOf(totalNotes+1));
                mitjana=notes/totalNotes;
            }
        }
    }
}

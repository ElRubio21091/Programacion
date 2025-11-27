import java.util.Scanner;

public class AER217
{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int n =scan.nextInt();
        do
        {
            if (n%2==0 && n!=0)
            {
                n =scan.nextInt();
                System.out.println("DERECHA");
            }
            else if (n%2==1)
            {
                System.out.println("IZQUIERDA");
            }
            }while(n!=0);
    }    
}
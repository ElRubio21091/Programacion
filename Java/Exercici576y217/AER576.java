import java.util.Scanner;

public class AER576
{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        int a;
        do {
            a = scan.nextInt();
            int b;
            int c=0;
            do {
                b=scan.nextInt();
                c+=b;
            } while (b!=0);
            c=c*a;
            int segons = (c%3600)%60;
            int minuts = c%3600/60;
            int hores = (c/3600);
            System.out.printf("%02d:%02d:%02d", hores, minuts, segons);
        } while (a!=0);
    }
}
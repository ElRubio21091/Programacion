import java.util.Scanner;

public class AER124
{
    public static void main(String[] args){
        Scanner scan = new Scanner(System.in);
        String n = scan.next();
        String m = scan.next();
        int long1= n.length();
        int long2= m.length();
        if (long1>long2){
            int longitud=long1-long2;
            while (longitud!=0){
                m="0"+m;
                longitud=longitud-1
            }
        }
        if (long1<long2){
            int longitud=long2-long1;
            while (longitud!=0){
                n="0"+n;
                longitud=longitud-1
            }
    }    
}
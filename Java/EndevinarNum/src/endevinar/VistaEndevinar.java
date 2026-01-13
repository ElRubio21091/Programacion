package endevinar;

public class VistaEndevinar {
    public static String modeV = "CONSOLA";
    public static void mostrarMissatge(String missatge){
        if (modeV.equals("CONSOLA"))System.out.prinln(missatge);
        else if (modeV.equals("UPPERCASE"))System.out.prinln(missatge.toUpperCase());
    }

    public static void setModeV(String mode){
        if (!mode.equals("")) return;
        modeV=mode;
    }
}

public class TresEnRatllaModel {

    public static int demanarFiles(String comanda){
        String j1f = comanda.toUpperCase();
        if (!(j1f.equals("A") || j1f.equals("B") || j1f.equals("C"))) {
            boolean resposta=false;
        }
        return switch (j1f) {
            case "A" -> 0;
            case "B" -> 1;
            case "C" -> 2;
            default -> -1;
        };
    }
    public static void demanarColumnes(String comanda){
        int j1c = Integer.parseInt(comanda);
        if (j1c != 1 && j1c != 2 && j1c != 3) {
            boolean resposta = false;
        }
        else {
            j1c=j1c - 1;
        }
    }
    public static void crearArray(int filas,int columnas){
        char[][] arr = new char[filas][columnas];
        for (int i = 0; i < filas; i++) {
            for (int j = 0; j < columnas; j++) {
                arr[i][j] = '-';
            }
        }

    }
    public static void afegirTauler(int j1f, int j1c, String turn){
        if (Tablero[j1f][j1c] == "X" || Tablero[j1f][j1c] == "O") {
            boolean posada=false;
        }
        else {
            Tablero[j1f][j1c] = turn;
        }
    }
    public static void tresEnRatlla(char[][] Tablero){

        for (int i = 0; i < 3; i++) {
            if (Tablero[i][0] != 0 &&
                    Tablero[i][0] == Tablero[i][1] &&
                    Tablero[i][1] == Tablero[i][2]) {
                Tablero[i][0] = '0' ? 1 : 2;
            }
        }

        for (int j = 0; j < 3; j++) {
            if (Tablero[0][j] != 0 &&
                    Tablero[0][j] == Tablero[1][j] &&
                    Tablero[1][j] == Tablero[2][j]) {
                Tablero[0][j] = 'O' ? 1 : 2;
            }
        }

        if (Tablero[0][0] != 0 &&
                Tablero[0][0] == Tablero[1][1] &&
                Tablero[1][1] == Tablero[2][2]) {
            Tablero[0][0] = 'O' ? 1 : 2;
        }

        if (Tablero[0][2] != 0 &&
                Tablero[0][2] == Tablero[1][1] &&
                Tablero[1][1] == Tablero[2][0]) {
            Tablero[0][2] = 'O' ? 1 : 2;
        }
        boolean tresenrallasiono=false;
    }
}

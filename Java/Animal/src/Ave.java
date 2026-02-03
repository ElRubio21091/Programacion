// Subclase Ave
public class Ave extends Animal {

    public Ave(String nombre) {
        super(nombre);
    }

    @Override
    public void moverse() {
        System.out.println("El ave " + nombre + " está volando");
    }

    public void ponerHuevos() {
        System.out.println("El ave pone huevos");
    }
}

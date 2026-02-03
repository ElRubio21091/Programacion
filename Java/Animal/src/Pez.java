public class Pez extends Animal {

    public Pez(String nombre) {
        super(nombre);
    }

    @Override
    public void moverse() {
        System.out.println("El pez " + nombre + " está nadando");
    }

    public void respirarBajoElAgua() {
        System.out.println("El pez respira bajo el agua");
    }
}

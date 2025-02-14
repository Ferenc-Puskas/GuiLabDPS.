package Complementarios.Ejercicio1;

import javax.swing.*;

public class Estudiante {

    private String nombre;
    private int edad;
    private String carrera;
    private String[] materias;

    public Estudiante (String nombre, int edad, String carrera) {

        this.nombre = nombre;
        this.edad = edad;
        this.carrera = carrera;
        this.materias = new String[5];
    }

    public void ingresarMaterias() {

        for (int i = 0; i < materias.length; i++) {
            materias[i] = JOptionPane.showInputDialog(null, "INGRESE LA MATERIA " + (i + 1) + ":");
        }
    }

    public void mostrarMaterias() {

        StringBuilder info = new StringBuilder();
        info.append("INFORMACION DEL ESTUDIANTE: \"n");
        info.append("NOMBRE DEL ESTUDIANTE: ").append(nombre) .append("\n");
        info.append("EDAD DEL ESTUDIANTE: ").append(edad) .append("\n");
        info.append("CARRERA: ").append(carrera) .append("\n");
        info.append("MATERIAS: \n");

        for (String materia : materias) {
            info.append("-").append(materia).append("\n");
        }

        JOptionPane.showMessageDialog(null, info.toString(), "DETALLES DEL ESTUDIANTE", JOptionPane.INFORMATION_MESSAGE);
    }
}

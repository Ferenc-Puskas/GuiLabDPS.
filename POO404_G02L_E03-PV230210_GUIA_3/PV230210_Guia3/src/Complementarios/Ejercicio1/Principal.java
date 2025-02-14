package Complementarios.Ejercicio1;

import javax.swing.*;

public class Principal {

    public static void main (String[] args) {

        String nombre = JOptionPane.showInputDialog("INGRESE EL NOMBRE DEL ESTUDIANTE: ");
        int edad = Integer.parseInt(JOptionPane.showInputDialog("INGRESE LA EDAD DEL ESTUDIANTE: "));
        String carrera = JOptionPane.showInputDialog("INGRESE LA CARRERA: ");

        Estudiante estudiante = new Estudiante(nombre, edad, carrera);

        estudiante.ingresarMaterias();
        estudiante.mostrarMaterias();
    }
}

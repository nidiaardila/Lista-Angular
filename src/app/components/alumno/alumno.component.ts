import { Component } from '@angular/core';
import { EstudianteI } from 'src/app/models/estudiante';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.scss'],
})
export class AlumnoComponent {
  alumnos: EstudianteI[] = [
    { id: 100, nombre: 'Maria', apellido: 'Gutierrez', becado: true },
    { id: 101, nombre: 'Jose', apellido: 'Lopez', becado: false },
    { id: 102, nombre: 'Ricardo', apellido: 'Luna', becado: true },
    { id: 103, nombre: 'Alfredo', apellido: 'Mieles', becado: true },
    { id: 104, nombre: 'Emilia', apellido: 'Caicedo', becado: false },
    { id: 105, nombre: 'Pablo', apellido: 'Medina', becado: false },
    { id: 106, nombre: 'Santiago', apellido: 'Flores', becado: true },
    { id: 107, nombre: 'Pedro', apellido: 'Jaimes', becado: true },
    { id: 108, nombre: 'Amalia', apellido: 'Herrera', becado: true },
    { id: 109, nombre: 'Karen', apellido: 'Garcia', becado: true },
    { id: 110, nombre: 'Lucia', apellido: 'Mendez', becado: false },
    { id: 111, nombre: 'Martin', apellido: 'Aravena', becado: true },
    { id: 112, nombre: 'Lucas', apellido: 'Valdez', becado: false },
    { id: 113, nombre: 'Tomas', apellido: 'Mantilla', becado: true },
    { id: 114, nombre: 'Lucy', apellido: 'Moreno', becado: false },
  ];

  resaltar: boolean = false;

  resaltarBecados() {
    this.resaltar = true;
  }

  volver() {
    this.resaltar = false;
  }
}

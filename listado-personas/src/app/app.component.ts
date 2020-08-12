import { Persona } from './persona.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[] = [new Persona("Christian", "Bolaños"), new Persona("Pilar", "Arroyave")];
  nombreInput: string;
  apellidoInput: string;

  onAgregarPersona () {
    let persona = new Persona(this.nombreInput, this.apellidoInput);
    this.personas.push(persona);
  }
}

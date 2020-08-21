import { Component, Output, EventEmitter } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() personaCreada = new EventEmitter<Persona>();
  //nombreInput: string;
  //apellidoInput: string;

  onAgregarPersona (nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement) {
    let persona = new Persona(nombreInput.value, apellidoInput.value);
    this.personaCreada.emit(persona);
  }
}

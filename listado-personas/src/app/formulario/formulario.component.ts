import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild('nombreInput') nombreInput: ElementRef;
  @ViewChild('apellidoInput') apellidoInput: ElementRef;


  onAgregarPersona () {
    let persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.personaCreada.emit(persona);
  }
}

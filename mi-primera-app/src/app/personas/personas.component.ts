import { Component } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})

export class PersonasComponent{

  agregarPersona = false;
  agregarPersonaStatus = "No se ha agregado ninguna persona";
  personaAgregada = false;
  nombrePersona = "";

  constructor(){
    setTimeout(
      () => {
        this.agregarPersona = true;
      },2000);
  }

  onCrearPersona(){
    this.personaAgregada = true;
    this.agregarPersonaStatus = "Persona agregada";
  }

  onModificarPersona(event: Event){
    this.nombrePersona = (<HTMLInputElement>event.target).value;

  }

}

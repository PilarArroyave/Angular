import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  @Output() resultadoSuma = new EventEmitter<number>();
  operandoA: number;
  operandoB: number;
  suma: number;

  onSumar(){
    this.suma = this.operandoA + this.operandoB;
    this.resultadoSuma.emit(this.suma);
  }
}

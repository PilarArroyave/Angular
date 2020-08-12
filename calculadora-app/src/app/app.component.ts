import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora-app';
  operandoA: number;
  operandoB: number;
  suma: number;

  onSumar(){
    this.suma = this.operandoA + this.operandoB;
  }
}

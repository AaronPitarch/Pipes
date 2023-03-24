import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent {

  nombreLower: string = 'aaron';
  nombreUpper: string = 'AARON';
  nombreCompleto: string = 'aARon';

  fecha: Date = new Date();
}

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.css']
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenido';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenido': 'invitarla'
  }

  cambiarCliente() {
    this.nombre = 'Aaron';
    this.genero = 'masculino';
  }

  //i18nPlural
  clientes: string[] = ['Maria', ' Pedro', ' Juan', ' Aaron', ' Aida'];
  clientesMapa = {
    '=0': ' no tenemos ningun cliente esperando',
    '=1': ' tenemos 1 cliente esperando',
    'other': ' tenemos # clientes esperando'
  }

  borrarCliente() {
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Aaron',
    edad: 32,
    direccion: 'Valencia'
  }

  //Json Pipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  //Async Pipe
  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Fin de la promesa');
    }, 3500);
  });
}

import { Component } from '@angular/core';
import { LoggingServices } from './LoggingServices.services';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: Persona[]=[
                        new Persona('Juan','Perez')
                      , new Persona('Laura','Juares')
                      , new Persona('Karla','Lara')
                    ];
  
  constructor(private loggingServices:LoggingServices){}

  personaAgregada(persona: Persona){
    this.loggingServices.enviaMensajeAConsola("Agregamos persona al arreglo");
    this.personas.push(persona);
  }
}

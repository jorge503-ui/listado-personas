import { Component, OnInit } from '@angular/core';
import { LoggingServices } from './LoggingServices.services';
import { Persona } from './persona.model';
import { PersonasServices } from './persona.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  titulo = 'Listado de Personas';
  personas: Persona[]=[];
  
  constructor(private loggingServices:LoggingServices
            ,private personasServices:PersonasServices){}

  ngOnInit(): void {
    this.personas=this.personasServices.personas;
  }

}

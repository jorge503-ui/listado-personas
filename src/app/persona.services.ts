import { Injectable } from "@angular/core";
import { LoggingServices } from "./LoggingServices.services";
import { Persona } from "./persona.model";

@Injectable()
export class PersonasServices{
    personas: Persona[]=[
        new Persona('Juan','Perez')
      , new Persona('Laura','Juares')
      , new Persona('Karla','Lara')
    ];

    constructor(private loggingServices:LoggingServices){}

    agregarPersona(persona: Persona){
      this.loggingServices.enviaMensajeAConsola("Agregamos a persona: "+persona.nombre)
        this.personas.push(persona);
      }
}
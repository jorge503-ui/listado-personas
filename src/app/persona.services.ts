import { Persona } from "./persona.model";

export class PersonasServices{
    personas: Persona[]=[
        new Persona('Juan','Perez')
      , new Persona('Laura','Juares')
      , new Persona('Karla','Lara')
    ];

    agregarPersona(persona: Persona){
        this.personas.push(persona);
      }
}
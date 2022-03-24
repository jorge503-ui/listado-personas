import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../persona.model';
import { PersonasServices } from '../persona.services';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona: Persona;
  @Input() indice:number;
  
  constructor(private personaServices:PersonasServices) { }

  ngOnInit(): void {
  }

  emitirSaludo(){
    this.personaServices.saludar.emit(this.indice);
  }

}

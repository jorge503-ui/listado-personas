import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoggingServices } from '../LoggingServices.services';
import { Persona } from '../persona.model';
import { PersonasServices } from '../persona.services';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit{

  //@Output() personaCreada = new EventEmitter<Persona>();

  //nombreInput:string = '';
  //apellidoInput:string = '';
  @ViewChild('nombreInput') nombreInput:ElementRef;
  @ViewChild('apellidoInput') apellidoInput:ElementRef;

  constructor(private loggingServices:LoggingServices
            , private personasServices:PersonasServices){
              this.personasServices.saludar.subscribe(
                (indice:number)=> alert("El indice es: " + indice)
              )
            }

  ngOnInit(): void {
    
  }

  agregarPersona(){
    let persona1 = new Persona(
      this.nombreInput.nativeElement.value
      ,this.apellidoInput.nativeElement.value);

    //this.loggingServices.enviaMensajeAConsola("Enviamos persona: " + persona1.nombre + " Apellido " + persona1.apellido);
    //this.personaCreada.emit(persona1);
    this.personasServices.agregarPersona(persona1);
  }

}

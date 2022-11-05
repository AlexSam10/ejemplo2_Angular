import { Component, EventEmitter, Input, Output} from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent{

  @Input() AlumnosUtl2:AlumnosUtl[]=[];

  @Output() onNuevoAlumno: EventEmitter<AlumnosUtl> =new EventEmitter()
  
  @Input()regAlumno:AlumnosUtl={
    nombre:"",
    edad:0
  }

  agregar(){
    //console.log('Funcion')
    //this.AlumnosUtl2.push(this.regAlumno);
    this.onNuevoAlumno.emit(this.regAlumno)
    this.regAlumno={
      nombre:"",
      edad:0
    }
  }

}

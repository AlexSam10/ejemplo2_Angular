import { Component, Input} from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interfaces';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent{

 @Input() AlumnosUtl2:AlumnosUtl[]=[];
  


}

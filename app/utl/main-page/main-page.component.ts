import { Component, OnInit } from '@angular/core';
import { AlumnosUtl } from '../Interfaces/utl.interfaces';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  AlumnosUtl2:AlumnosUtl[]=[
    {
      nombre:'Pablo',
      edad:24
    },
    {
      nombre:'Pablo',
      edad:24
    },
    {
      nombre:'Pablo',
      edad:24
    },
  ] 

  regAlumno:AlumnosUtl={
    nombre:'Pablo',
    edad:24

    
  }

  agregarNuevoAlumno(datos:AlumnosUtl){
    this.AlumnosUtl2.push(datos)
  }


  

}

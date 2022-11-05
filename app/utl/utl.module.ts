import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AgregarComponent } from './agregar/agregar.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AlumnosComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MainPageComponent
  ]
})
export class UtlModule { }

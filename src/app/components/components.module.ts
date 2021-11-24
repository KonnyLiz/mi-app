import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';

@NgModule({
  declarations: [
    ListasComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // exportamos la lista porque lo usaremos afuera
    ListasComponent
  ]
})

export class ComponentsModule { }

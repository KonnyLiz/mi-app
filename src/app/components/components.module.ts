import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListasComponent } from './listas/listas.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ListasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    // exportamos la lista porque lo usaremos afuera
    ListasComponent
  ]
})

export class ComponentsModule { }

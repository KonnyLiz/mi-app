import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Lista } from 'src/app/models/lista.model';
import { DeseosService } from 'src/app/services/deseos.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  listas: Lista[] = [];

  constructor(
    public deseos: DeseosService,
    private router: Router,
    private alertas: AlertController
  ) {
    this.listas = deseos.getListas();
  }

  // el async transforma la funcion en una promesa
  async addLista() {
    // this.router.navigateByUrl('/tabs/agregar');

    const alerta = await this.alertas.create({
      header: 'Nueva lista',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          placeholder: 'Nombre de la lista'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('cancelar');
          }
        },
        {
          text: 'Crear',
          handler: (data) => {
            if (data.titulo.legth === 0) {
              return;
            } else {
              // crear la lista
              const idLista = this.deseos.addLista(data.titulo);
              this.router.navigateByUrl(`/tabs/agregar/${idLista}`);
            }
          }
        }
      ],
    });

    alerta.present();
  }

  verLista(id: number) {
    this.router.navigateByUrl(`/tabs/agregar/${id}`);
  }

}

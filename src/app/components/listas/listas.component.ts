import { Component, Input, OnInit } from '@angular/core';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input() terminados = true;

  listas: Lista[] = [];

  constructor(
    public deseos: DeseosService,
    private router: Router,
    private alertas: AlertController
  ) {
    this.listas = deseos.getListas();
  }

  ngOnInit() { }

  verLista(id: number) {
    if (this.terminados) {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${id}`);
    } else {
      this.router.navigateByUrl(`/tabs/tab1/agregar/${id}`);
    }
  }

  async editar(valor: Lista) {
    // this.router.navigateByUrl('/tabs/agregar');

    const alerta = await this.alertas.create({
      header: 'Editar titulo',
      inputs: [
        {
          name: 'titulo',
          type: 'text',
          value: valor.titulo,
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
          text: 'Editar',
          handler: (data) => {
            if (data.titulo.legth === 0) {
              return;
            } else {
              // editar el nombre de la lista
              const idLista = this.deseos.editListaTitulo(valor.id, data.titulo);
            }
          }
        }
      ],
    });

    alerta.present();
  }

}

import { Component, OnInit } from '@angular/core';
import { DeseosService } from '../../services/deseos.service';
import { ActivatedRoute } from '@angular/router';
import { Lista } from '../../models/lista.model';
import { ListaItem } from '../../models/lista-item.model';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  lista: Lista;
  nombreItem: string;

  constructor(
    private deseos: DeseosService,
    private route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('idLista');
    this.lista = this.deseos.getLista(id);
  }

  ngOnInit() {
  }

  addItem() {
    if (this.nombreItem.length === 0) {
      return;
    } else {
      const nuevoItem = new ListaItem(this.nombreItem);
      this.lista.items.push(nuevoItem);

      // las modificaciones hechas en el objeto que tengo, afectan
      // al objeto del servicio, por lo que ya insertamos el item
      // y solo procedemos a guardar en el storage

      this.deseos.addStorage();
      this.nombreItem = '';
    }
  }

}

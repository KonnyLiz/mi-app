import { Component, Input, OnInit } from '@angular/core';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';

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

}

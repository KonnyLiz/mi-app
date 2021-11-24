import { Component, OnInit } from '@angular/core';
import { Lista } from '../../models/lista.model';
import { DeseosService } from '../../services/deseos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  listas: Lista[] = [];

  constructor(
    public deseos: DeseosService,
    private router: Router,
  ) {
    this.listas = deseos.getListas();
  }

  ngOnInit() {}

  verLista(id: number) {
    this.router.navigateByUrl(`/tabs/agregar/${id}`);
  }

}

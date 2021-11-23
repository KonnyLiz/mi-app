import { Injectable } from '@angular/core';
import { ListaItem } from '../models/lista-item.model';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    const lista1 = new Lista('Ver One Piece');
    const lista2 = new Lista('Ver One Piece x2');

    this.listas.push(lista1, lista2);
  }

  getListas(){
    return this.listas;
  }
}

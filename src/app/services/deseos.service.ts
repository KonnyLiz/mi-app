import { Injectable } from '@angular/core';
import { ListaItem } from '../models/lista-item.model';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() {
    this.loadStorage();
  }

  getListas() {
    return this.listas;
  }

  addLista(titulo: string) {
    const nueva = new Lista(titulo);
    this.listas.push(nueva);
    this.addStorage();
    return nueva.id;
  }

  addStorage() {
    // json stringify permite crear un texto plano de un arreglo
    localStorage.setItem('data', JSON.stringify(this.listas));
  }

  loadStorage() {
    if(localStorage.getItem('data')){
      this.listas = JSON.parse(localStorage.getItem('data'));
    } else {
      this.listas = [];
    }
  }
}

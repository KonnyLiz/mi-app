import { Injectable } from '@angular/core';
import { ListaItem } from '../models/lista-item.model';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class DeseosService {

  listas: Lista[] = [];

  constructor() { }
}

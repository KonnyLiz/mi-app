import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado'
})
export class FiltroCompletadoPipe implements PipeTransform {

  // retorna una lista de las listas completadas
  transform(listas: Lista[], completados: boolean = true): Lista[] {
    return listas.filter(l => l.completed === completados);
  }

}

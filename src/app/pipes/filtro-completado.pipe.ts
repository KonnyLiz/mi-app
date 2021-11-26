import { Pipe, PipeTransform } from '@angular/core';
import { Lista } from '../models/lista.model';

@Pipe({
  name: 'filtroCompletado',

  // le decimos a angular que haga la deteccion de cambios aunque
  // no fuera en el componente que lo usamos
  pure: false
})

// por defecto, los pipes solamente se refrescan cuando hay cambios en su
// componente en el que estan siendo llamados, por lo que para que detecte
// todos los cambios usamos la propiedad pure: false.

export class FiltroCompletadoPipe implements PipeTransform {

  // retorna una lista de las listas completadas
  transform(listas: Lista[], completados: boolean = true): Lista[] {
    return listas.filter(l => l.completed === completados);
  }

}

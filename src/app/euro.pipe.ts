import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euro'
})
export class EuroPipe implements PipeTransform {

  transform(value: any, digitosEnteros = 1, digitosComa = 2): any {
    return value + ' €' + digitosEnteros + digitosComa;
  }

}

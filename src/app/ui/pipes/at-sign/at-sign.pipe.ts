import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'atSign'
})
export class AtSignPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    let response = value.split(' ');
    return `@${response.join('').toLowerCase()}`;
  }

}

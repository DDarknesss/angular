import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string ): string {
    const returnValue = value.substring(0,3) + '...'
    return returnValue;
  }


}
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ngObject'
})
export class NgObjectPipe implements PipeTransform {

  transform(value: Object): any {
    let someString = 'this webpage ';

    for (let obj in value){
      someString += obj + ':' +value[obj]  + '   '
    }
    return someString;
  }
}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buy',
  standalone: true
})
export class BuyPipe implements PipeTransform {

  transform(productName:string): string {
    return `buy ${productName}`;
  }

}

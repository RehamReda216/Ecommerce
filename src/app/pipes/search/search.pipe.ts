import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../../interfaces/product';

@Pipe({
  name: 'search',
  standalone: false
})
export class SearchPipe implements PipeTransform {

  transform(products:Product[], searchTerm:string): Product[] {
    //filters products with specific title
    return products.filter((product) => product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()));
  }

}

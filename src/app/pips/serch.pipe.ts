import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interface/product';

@Pipe({
  name: 'search',
  standalone: true,
})
export class SerchPipe implements PipeTransform {
  transform(product: Product[], term: string): Product[] {
    return product.filter((product) =>
      product.title.toLowerCase().includes(term.toLowerCase())
    );
  }
}

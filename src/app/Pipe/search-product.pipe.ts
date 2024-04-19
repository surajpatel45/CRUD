import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Model/product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], productsearch: string): Product[] {

    if(!products) return [];
    if(!productsearch) return products;
    
    productsearch = productsearch.toLowerCase();
    return products.filter(product => {
      return product.name.toLowerCase().includes(productsearch);
    });
  }

}

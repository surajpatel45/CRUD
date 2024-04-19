import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Model/product';

@Pipe({
  name: 'searchProduct'
})
export class SearchProductPipe implements PipeTransform {

  transform(products: Product[], productsearch: string): Product[] {
    if(productsearch){
      return products.filter(Product => {
        return Product.name
      });
    }
    return products;
  }

}

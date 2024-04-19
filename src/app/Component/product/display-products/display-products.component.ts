import { Component } from '@angular/core';
import { Product } from '../../../Model/product';
import { ProductService } from '../../../Service/product.service';
import { Router } from '@angular/router';
import { SearchProductPipe } from '../../../Pipe/search-product.pipe';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})
export class DisplayProductsComponent {
  products!: Product[];
  productsearch: string = '';
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts() {
    this.productService.displayProducts().subscribe(data =>{
      this.products = data;
      console.log(this.products);
      console.log(data);
    });
  }

  modifyProduct(id: number) {
    this.router.navigate(['/product/modify-product', id ]);
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id).subscribe( data=> {
      window.alert("Product Removed succesfully");
      this.displayProducts();
    });
    
    this.router.navigateByUrl('/product/display-products');
  }
}

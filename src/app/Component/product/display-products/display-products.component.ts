import { Component } from '@angular/core';
import { Product } from '../../../Model/product';
import { ProductService } from '../../../Service/product.service';
import { Router } from '@angular/router';
import { SearchProductPipe } from '../../../Pipe/search-product.pipe';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-display-products',
  templateUrl: './display-products.component.html',
  styleUrl: './display-products.component.css'
})
export class DisplayProductsComponent {
  products!: Product[];
  productsearch: string = '';
  constructor(private productService: ProductService, private router: Router, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.displayProducts();
  }

  displayProducts() {
    this.productService.displayProducts().subscribe(
      data =>{
        this.products = data;
        console.log(this.products);
        // console.log(data);
      }, 
      error => {
        this.toastr.error('Can not display products!','Error');
      }
    );
  }

  modifyProduct(id: number) {
    this.router.navigate(['/product/modify-product', id ]);
  }

  removeProduct(id: number) {
    this.productService.removeProduct(id).subscribe( 
      data=> {
        this.toastr.success('Product removed successfully','Success');
        this.displayProducts();
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to Remove product', 'Error');
        this.displayProducts();
      }
    );
    this.router.navigateByUrl('/product/display-products');
  }
}

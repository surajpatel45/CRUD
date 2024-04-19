import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../../Model/product';
import { Router } from '@angular/router';
import { ProductService } from '../../../Service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  product: Product = new Product;

  constructor(private router: Router, private productService: ProductService){}

  saveProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      //console.log(data);
      window.alert("Product added successfully");
      this.router.navigate(['/product/display-products']);
    },
    error => console.log(error));
  }
  onSubmit() {
    console.log(this.product);
    this.saveProduct();
  }
}

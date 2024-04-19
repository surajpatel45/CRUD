import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from '../../../Model/product';
import { Router } from '@angular/router';
import { ProductService } from '../../../Service/product.service';
import { ToastrService } from 'ngx-toastr';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  product: Product = new Product;

  constructor(private router: Router, private productService: ProductService, private toastr: ToastrService){}

  saveProduct() {
    this.productService.addProduct(this.product).subscribe(data => {
      //console.log(data);
      this.toastr.success('Product added succesfully','Success');
      this.router.navigate(['/product/display-products']);
    },
    error => {
      console.log(error);
      this.toastr.error('Failed to add product', 'Error');
    });
  }
  onSubmit() {
    console.log(this.product);
    this.saveProduct();
  }
}

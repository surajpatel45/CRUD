import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
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

  productForm: FormGroup; // Define FormGroup instance

  constructor(private router: Router, private productService: ProductService, private toastr: ToastrService, private formBuilder: FormBuilder) {
    this.productForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: [''],
      unitPrice: ['', Validators.required],
      quantity: ['', Validators.required]
    });
  }

  saveProduct(): void {
    const productData: Product = {
      id: this.productForm.value.id,
      name: this.productForm.value.name,
      description: this.productForm.value.description,
      unitPrice: this.productForm.value.unitPrice,
      quantity: this.productForm.value.quantity
    };

    this.productService.addProduct(productData).subscribe(
      data => {
        this.toastr.success('Product added successfully', 'Success');
        this.router.navigate(['/product/display-products']);
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to add product', 'Error');
      }
    );
  }


  onSubmit(): void {
    if (this.productForm.valid) {
      this.saveProduct();
    } else {
      this.toastr.error('Please fill all required fields', 'Error');
    }
  }
}

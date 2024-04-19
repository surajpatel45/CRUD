import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../Service/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrl: './modify-product.component.css'
})
export class ModifyProductComponent implements OnInit{
  id!: number;
  product: Product = new Product;

  constructor( private router:Router, private route:ActivatedRoute, private productService: ProductService, private toastr: ToastrService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.displayProductBtId(this.id).subscribe(data => {
      this.product = data;
    })
  }

  onSubmit(){
    this.productService.modifyProduct(this.id, this.product).subscribe( data=> {
      this.toastr.success('Product modified successfully','Success');
    },
    error =>{
      console.log(error);
      this.toastr.error('Failed to modify product','Error');
    });
    this.router.navigateByUrl('/product/display-products');
  }
}

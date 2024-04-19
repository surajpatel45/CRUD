import { Component, OnInit } from '@angular/core';
import { Product } from '../../../Model/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../Service/product.service';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrl: './modify-product.component.css'
})
export class ModifyProductComponent implements OnInit{
  id!: number;
  product: Product = new Product;

  constructor( private router:Router, private route:ActivatedRoute, private productService: ProductService){}
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.displayProductBtId(this.id).subscribe(data => {
      this.product = data;
    })
  }

  onSubmit(){
    this.productService.modifyProduct(this.id, this.product).subscribe( data=> {
      
      this.router.navigateByUrl('/product/display-products');
    },
    error => console.log(error));
    alert("Product modified successfully");
    this.router.navigateByUrl('/product/display-products');
  }
}

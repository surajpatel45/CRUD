import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private addProductUrl = "https://localhost:7030/api/Product/AddProduct";
  private getProductUrl = "https://localhost:7030/api/Product/GetProducts";
  private updateProductUrl = "https://localhost:7030/api/Product/ModifyProduct?id=";
  private deleteProductUrl = "https://localhost:7030/api/Product/RemoveProduct?id=";
  private getProductByIdUrl = "https://localhost:7030/api/Product/GetProductById?id=";


  constructor( private http: HttpClient) { }

  addProduct(product: Product): Observable<Object>{
    return this.http.post(`${this.addProductUrl}`, product, { responseType: 'text' });
  }

  displayProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.getProductUrl);
  }

  modifyProduct(id: number, product: Product): Observable<any>{
    return this.http.put<any>(`${this.updateProductUrl}${id}`, product);
  }

  removeProduct(id: number): Observable<Object> {
    return this.http.delete(`${this.deleteProductUrl}${id}`, { responseType: 'text' } );
  }

  displayProductBtId(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.getProductByIdUrl}${id}`);
  }

}

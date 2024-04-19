import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { ProductComponent } from './Component/product/product.component';
import { RegisterComponent } from './Component/register/register.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { AddProductComponent } from './Component/product/add-product/add-product.component';

import { RemoveProductComponent } from './Component/product/remove-product/remove-product.component';
import { ModifyProductComponent } from './Component/product/modify-product/modify-product.component';
import { DisplayProductsComponent } from './Component/product/display-products/display-products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './Service/product.service';
import { AuthService } from './Service/auth.service';
import { SearchProductPipe } from './Pipe/search-product.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProductComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    AddProductComponent,
    RemoveProductComponent,
    ModifyProductComponent,
    DisplayProductsComponent,
    SearchProductPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ProductService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

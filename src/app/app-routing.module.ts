import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Component/about/about.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ProductComponent } from './Component/product/product.component';
import { AuthGuard } from './auth.guard';
import { AddProductComponent } from './Component/product/add-product/add-product.component';
import { DisplayProductsComponent } from './Component/product/display-products/display-products.component';
import { ModifyProductComponent } from './Component/product/modify-product/modify-product.component';
import { RemoveProductComponent } from './Component/product/remove-product/remove-product.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path: 'product',
    component: ProductComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'add-product', component: AddProductComponent, canActivate: [AuthGuard] },
      { path: 'display-products', component: DisplayProductsComponent, canActivate: [AuthGuard] },
      { path: 'modify-product/:id', component: ModifyProductComponent, canActivate: [AuthGuard] },
      { path: 'remove-product', component: RemoveProductComponent, canActivate: [AuthGuard] }
    ]
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

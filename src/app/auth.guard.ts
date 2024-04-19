import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "./Service/auth.service";
import { ToastrService } from "ngx-toastr";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router:Router, private authService: AuthService, private toastr: ToastrService){}

  canActivate(): boolean{
    if(this.authService.isLoggedIn()){
      return true;
    }
    else {
      // window.alert("Please login to continue!");
      this.toastr.warning('Please login to continue!');
      return false;
    }
  }
};
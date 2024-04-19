import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService){}

  login(){
    if(this.email === 'sp@gmail.com' && this.password === "sp"){
      this.authService.setLoggedIn(true);
      // console.log(this.authService.isLoggedIn());
      this.router.navigate(['/product']);
    }
    else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}

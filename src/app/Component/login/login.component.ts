import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../Service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService, private toastr: ToastrService){}

  login(): void {
    this.authService.login(this.email, this.password).subscribe(
      data => {
        this.toastr.success('LoggedIn Successfully');
        this.authService.setLoggedIn(true);
        this.router.navigate(['/product']);
      },
      error => {
        this.errorMessage = error;
        this.toastr.error('Login Failed, Please try again');
      }
    );
  }
}

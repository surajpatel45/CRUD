import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../Model/User';
import { Router } from '@angular/router';
import { UserService } from '../../Service/user.service';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  userForm!: FormGroup;
  constructor(private router:Router, private userService: UserService, private toastr:ToastrService ) {
    this.userForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('Male', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  saveUser(): void {
    const userData: User = {
      emailAddress: this.userForm.value.email,
      name: this.userForm.value.name,
      gender: this.userForm.value.gender,
      password: this.userForm.value.password
    };

    this.userService.addUser(userData).subscribe(
      data => {
        this.toastr.success('User Registered successfully', 'Success');
        this.router.navigate(['/login']);
      },
      error => {
        console.log(error);
        this.toastr.error('Failed to Register', 'Error');
      }
    );
  }
  onSubmit() {
    if (this.userForm.valid) {
      this.saveUser();
    } else {
      this.toastr.error('Please fill all required fields', 'Error');
    }

  }
}

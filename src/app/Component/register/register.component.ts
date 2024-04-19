import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  myReactiveForm!: FormGroup;
  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      gender: new FormControl('Male', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  onSubmit() {
    console.log(this.myReactiveForm);
  }
}

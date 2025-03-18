import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  userObj: any = {
    userName: '',
    password: '',
  };

  user: any;
  constructor() {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.user = JSON.parse(storedUser);
      this.router.navigateByUrl('admin');
    }
  }

  userForm: FormGroup = new FormGroup({
    userName: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  router = inject(Router);

  login() {
    this.userObj = this.userForm.value;
    if (this.userObj.userName == 'admin' && this.userObj.password == '123') {
      localStorage.setItem('user', JSON.stringify(this.userObj));
      this.router.navigateByUrl('admin');
    } else {
      alert('Invalid user name and password');
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from '../../service/UserService/user-service.service';

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
  constructor(private userService: UserServiceService) {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      this.router.navigateByUrl('admin');
    }
  }

  // userForm: FormGroup = new FormGroup({
  //   userName: new FormControl('', Validators.required),
  //   password: new FormControl('', [
  //     Validators.required,
  //     Validators.minLength(5),
  //   ]),
  // });

  router = inject(Router);

  dynamicUser: any = {
    EmailId: '',
    Password: '',
  };

  dynamicUserForm: FormGroup = new FormGroup({
    EmailId: new FormControl('', Validators.required),
    Password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  login() {
    // Static Login
    // this.userObj = this.userForm.value;
    // if (this.userObj.userName == 'admin' && this.userObj.password == '123') {
    //   localStorage.setItem('user', JSON.stringify(this.userObj));
    //   this.router.navigateByUrl('admin');
    // } else {
    //   alert('Invalid user name and password');
    // }
    this.userService.userLogin(this.dynamicUserForm.value).subscribe(
      (res: any) => {
        if (res.result) {
          localStorage.setItem('user', JSON.stringify(res.data));
          this.router.navigateByUrl('admin');
        } else {
          alert(res.message);
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  // /**************** Login with Api ****************/

  http = inject(HttpClient);
}

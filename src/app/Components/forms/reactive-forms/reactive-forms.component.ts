import { Component, CSP_NONCE } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-forms.component.html',
  styleUrl: './reactive-forms.component.css',
})
export class ReactiveFormsComponent {
  userData: FormGroup = new FormGroup({
    firstName: new FormControl('Mark', [
      Validators.required,
      Validators.minLength(3),
    ]),
    lastName: new FormControl('Antonio', [
      Validators.required,
      Validators.minLength(3),
    ]),
    userName: new FormControl('', [Validators.email, Validators.minLength(5)]),
    city: new FormControl('New York'),
    state: new FormControl('Washington Dc'),
    zipCode: new FormControl('23300'),
    hasAcceptedTerms: new FormControl(true),
  });

  constructor() {
    console.log(this.userData.controls['userName']);
  }

  formValues: any;
  submitData() {
    this.formValues = this.userData.value;
    console.log(this.userData);
    console.log(this.userData.value);
  }

  errorList: string[] = [];
}

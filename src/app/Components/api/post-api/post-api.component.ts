import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-post-api',
  imports: [ReactiveFormsModule],
  templateUrl: './post-api.component.html',
  styleUrl: './post-api.component.css',
})
export class PostApiComponent {
  deptObj: any;

  deptForm = new FormGroup({
    depratmetId: new FormControl(0),
    departmentName: new FormControl('', [Validators.required]),
    departmentLogo: new FormControl('', [Validators.required]),
  });

  http = inject(HttpClient);

  onSubmit() {
    console.log(this.deptForm.value);
    this.http.post(
      'https://projectapi.gerasim.in/Complaint/AddNewDeptartment',
      this.deptObj
    );
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
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
export class PostApiComponent implements OnInit {
  ngOnInit(): void {
    this.getDepartments();
  }

  departmentList: any[] = [];

  deptForm = new FormGroup({
    // depratmetId: new FormControl(0),
    departmentName: new FormControl('', [Validators.required]),
    departmentLogo: new FormControl(''),
  });

  // Injecting service in your component
  http = inject(HttpClient);

  onSubmit() {
    this.http
      .post('https://projectapi.gerasim.in/api/Complaint/AddNewDepartment', {
        departmentId: 0,
        ...this.deptForm.value,
      })
      .subscribe((res: any) => {
        if (res.result) {
          alert('Success');
          this.getDepartments();
        } else {
          alert(res.message);
        }
      });
  }

  getDepartments() {
    this.http
      .get('https://projectapi.gerasim.in/api/Complaint/GetParentDepartment')
      .subscribe((res: any) => {
        if (res.result) {
          this.departmentList = res.data;
          console.log(res.data);
        } else {
          console.log(res.message);
          alert(res.message);
        }
      });
  }

  resetForm() {
    console.log('Reset Invoked');
    this.deptForm.reset();
  }
}

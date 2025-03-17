import { HttpClient, HttpParams } from '@angular/common/http';
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
    departmentId: new FormControl(0),
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
          this.deptForm.setValue({
            departmentId: 0,
            departmentName: '',
            departmentLogo: '',
          });
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
        } else {
          alert(res.message);
        }
      });
  }

  resetForm() {
    this.deptForm.setValue({
      departmentId: 0,
      departmentName: '',
      departmentLogo: '',
    });
  }

  onEdit(department: any) {
    this.deptForm.setValue({
      departmentId: department.departmentId,
      departmentName: department.departmentName,
      departmentLogo: department.departmentLogo,
    });
  }

  onUpdate() {
    console.log(this.deptForm.value);
    this.http
      .post(
        'https://projectapi.gerasim.in/api/Complaint/UpdateDepartment',
        this.deptForm.value
      )
      .subscribe(
        (res: any) => {
          if (res.result) {
            alert('Deptartment Updated Succesfully');
            this.getDepartments();
            this.resetForm();
          }
        },
        (error) => {
          console.log(error);
          alert(error);
        }
      );
  }

  deleteRecord(department: any) {
    const confirmDelete = confirm(
      `Are you sure to delete ${department.departmentName} department`
    );
    if (confirmDelete) {
      this.http
        .delete(
          'https://projectapi.gerasim.in/api/Complaint/DeletedepartmentBydepartmentId?departmentId=' +
            department.departmentId
        )
        .subscribe(
          (res: any) => {
            if (res.result) {
              alert('Depratment deleted successfully');
              this.getDepartments();
            }
          },
          (error) => {
            console.log(error);
            alert('Error deleting department, Try again');
          }
        );
    }
  }
}

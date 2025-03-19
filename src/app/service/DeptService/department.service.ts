import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://projectapi.gerasim.in/api/Complaint/';

  getDepartments() {
    return this.http.get(`${this.apiUrl}GetParentDepartment`);
  }

  saveNewDept(department: any) {
    return this.http.post(`${this.apiUrl}AddNewDepartment`, department);
  }

  onUpdate(department: any) {
    return this.http.post(`${this.apiUrl}UpdateDepartment`, department);
  }

  deleteRecord(department: any) {
    return this.http.delete(
      `${this.apiUrl}DeletedepartmentBydepartmentId?departmentId=${department.departmentId}`
    );
  }

  add(a: number, b: number) {
    return a + b;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../../constants/constants';
import { BehaviorSubject, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DepartmentService {
  constructor(private http: HttpClient) {}

  public onRoleChange$: Subject<string> = new Subject<string>();

  public role$: BehaviorSubject<string> = new BehaviorSubject<string>('Guest');

  apiUrl = 'https://projectapi.gerasim.in/api/Complaint/';

  getDepartments() {
    // return this.http.get(`${this.apiUrl}GetParentDepartment`);
    return this.http.get(
      Constant.API_URL + Constant.DEPARTMENT_METHODS.GET_PARENT_DEPT
    );
  }

  saveNewDept(department: any) {
    // return this.http.post(`${this.apiUrl}AddNewDepartment`, department);
    return this.http.post(
      Constant.API_URL + Constant.DEPARTMENT_METHODS.ADD_NEW_DEPT,
      department
    );
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

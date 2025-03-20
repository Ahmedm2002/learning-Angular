import { Component } from '@angular/core';
import { DepartmentService } from '../../service/DeptService/department.service';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  user: any;
  userRole: string = '';
  constructor(private deptServ: DepartmentService) {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);

    this.deptServ.role$.subscribe((role: string) => {
      this.userRole = role;
    });
  }
}

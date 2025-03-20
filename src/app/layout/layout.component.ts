import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet,
} from '@angular/router';
import { DepartmentService } from '../service/DeptService/department.service';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  router = inject(Router);

  user: any;
  constructor(private deptServ: DepartmentService) {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
  }
  logOut() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }

  selectedRole: string = '';

  onChange(role: string) {
    this.deptServ.onRoleChange$.next(role);
    this.deptServ.role$.next(role);
  }
}

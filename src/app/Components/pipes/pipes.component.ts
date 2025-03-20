import { Component } from '@angular/core';
import { interval, pipe, map } from 'rxjs';
import {
  UpperCasePipe,
  DatePipe,
  JsonPipe,
  CurrencyPipe,
  AsyncPipe,
} from '@angular/common';
import { Observable } from 'rxjs';
import { NaPipe } from '../../customPipes/na.pipe';
import { DepartmentService } from '../../service/DeptService/department.service';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [UpperCasePipe, DatePipe, JsonPipe, CurrencyPipe, AsyncPipe, NaPipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css',
})
export class PipesComponent {
  versionDetails: string = 'angular';
  date: Date = new Date();
  employees: any = [
    {
      id: 23,
      name: 'Ahmed',
    },
  ];
  price: number = 3241.234;

  currentTime: Observable<Date> = new Observable<Date>();

  selectedRoleBehaviour: string = '';
  selectedRoleSubject: string = '';

  constructor(private deptServ: DepartmentService) {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
    this.deptServ.onRoleChange$.subscribe((role: string) => {
      this.selectedRoleSubject = role;
    });
    this.deptServ.role$.subscribe((role: string) => {
      this.selectedRoleBehaviour = role;
    });
  }
  city: string = '';
}

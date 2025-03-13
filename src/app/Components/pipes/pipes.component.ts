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

  constructor() {
    this.currentTime = interval(1000).pipe(map(() => new Date()));
  }
  city: string = '';
}

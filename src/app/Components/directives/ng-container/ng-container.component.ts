import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-ng-container',
  imports: [CommonModule],
  templateUrl: './ng-container.component.html',
  styleUrl: './ng-container.component.css',
})
export class NgContainerComponent {
  isPending: boolean = false;
  apiUrl = 'https://jsonplaceholder.typicode.com/users';
  userList: any[] = [];

  http = inject(HttpClient);

  getUsers() {
    this.isPending = true;
    this.http.get(`${this.apiUrl}`).subscribe((res: any) => {
      this.isPending = false;
      console.log(res);
      this.userList = res;
    });
  }
}

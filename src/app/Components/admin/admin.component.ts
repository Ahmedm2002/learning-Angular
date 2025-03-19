import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent {
  user: any;
  constructor() {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);

    console.log(this.user);
    console.log(typeof this.user);
  }
}

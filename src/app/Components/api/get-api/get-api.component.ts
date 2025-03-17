// import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AlertComponent } from '../../../alert/alert.component';
import { CustomBtnComponent } from '../../../resueable-components/custom-btn/custom-btn.component';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent, CustomBtnComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
})
export class GetApiComponent {
  // Using Dependency Injectsion

  // http = Inject(HttpClient);

  // Using Constructor
  constructor(private http: HttpClient) {
    this.getAllUser();
    this.getCustomers();
  }

  userList: any[] = [];

  getAllUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (res: any) => {
        console.log(res);
        this.userList = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  customerList: any[] = [];

  getCustomers() {
    this.http
      .get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers')
      .subscribe((res: any) => {
        console.log(res);
        this.customerList = res.data;
      });
  }
}

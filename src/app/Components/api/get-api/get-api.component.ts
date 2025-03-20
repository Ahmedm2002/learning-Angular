// import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { AlertComponent } from '../../../alert/alert.component';
import { CustomBtnComponent } from '../../../resueable-components/custom-btn/custom-btn.component';
import { Customer } from '../../../Model/Class/customer';
import { IUser } from '../../../Model/Interface/IUser';

@Component({
  selector: 'app-get-api',
  standalone: true,
  imports: [AlertComponent, CustomBtnComponent],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GetApiComponent {
  // Using Dependency Injectsion

  // http = Inject(HttpClient);

  // Using Constructor
  constructor(
    private http: HttpClient,
    private changeDetectionRef: ChangeDetectorRef
  ) {
    this.getAllUser();
    this.getCustomers();
    this.changeDetectionRef.detectChanges();
  }

  userList: IUser[] = [];

  getAllUser() {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (res: any) => {
        this.userList = res;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  customerList: Customer[] = [];

  getCustomers() {
    this.http
      .get('https://projectapi.gerasim.in/api/RealEstate/GetAllCustomers')
      .subscribe((res: any) => {
        this.customerList = res.data;
      });
  }
}

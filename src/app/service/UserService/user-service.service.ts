import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor(private http: HttpClient) {}
  apiUrl = 'https://projectapi.gerasim.in/';

  userLogin(user: any) {
    // return this.http.post('api/UserApp/login', { user });
    return this.http.post(`${this.apiUrl}api/UserApp/login`, user);
  }
}

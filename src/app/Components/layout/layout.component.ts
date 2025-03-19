import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {
  user: any;
  constructor(private router: Router) {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
  }
  logOut() {
    localStorage.removeItem('user');
    this.router.navigateByUrl('');
  }
}

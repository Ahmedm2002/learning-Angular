import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AdminComponent, UserComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learningAngular';
}

import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AdminComponent } from './Components/admin/admin.component';
import { UserComponent } from './Components/user/user.component';
import { SignalsComponent } from './Components/signals/signals.component';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet, AdminComponent, UserComponent, RouterLink],
  imports: [RouterOutlet, RouterLink, SignalsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'learningAngular';
}

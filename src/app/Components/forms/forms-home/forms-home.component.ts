import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forms-home',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './forms-home.component.html',
  styleUrl: './forms-home.component.css',
})
export class FormsHomeComponent {}

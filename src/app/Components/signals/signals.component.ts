import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  userName = signal('John Doe');
  userId = signal<number>(3321343);

  changeNameId() {
    this.userId.set(3232);
    this.userName.set('Jane Smith');
  }
}

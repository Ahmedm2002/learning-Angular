import { Component, computed, signal } from '@angular/core';

interface Product {
  id: number;
  name: string;
  price: number;
  itemInStock: number;
  isDeliverable: boolean;
}

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css',
})
export class SignalsComponent {
  // Primitive Data Types
  count = signal(10);

  fullName = signal('John Doe');

  rollNo = signal<number>(23);

  nameRollNo = computed(() => this.fullName() + ' ' + this.rollNo());

  // Non-Primitive Data Types

  names = signal(['John', 'Doe', 'Alice', 'Bob']);

  addName() {
    this.names.set([...this.names(), 'Mark']);
  }

  cart = signal({
    id: 0,
    name: 'Wireless Mouse with build in battery',
    price: 499.89,
    isAvailable: false,
  });

  changePrice() {
    this.cart.set({ ...this.cart(), price: 1099 });
  }

  changeName() {
    this.fullName.set('Bob Mark');
  }
}

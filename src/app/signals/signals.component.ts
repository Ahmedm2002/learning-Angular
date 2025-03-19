import { Component, signal } from '@angular/core';

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
  count = signal(10);
  cart = signal({
    id: 0,
    name: 'Wireless Mouse with build in battery',
    price: 499.89,
    isAvailable: false,
  });
  names = signal(['John', 'Doe', 'Alice', 'Bob']);
}

import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  angular: string = 'Angular version 18';
  tutor: string = 'Learning Partner';
  tutorialDuration: number = 3.05;
  namePlaceholder = 'Enter Name E.g: John Doe';
  dataBindingStyles: string = 'text-danger m-3';
  checkboxInput: string = 'checkbox';
  cart = signal('Cart is Empty');

  showMsg() {
    alert('Downloading started .......');
  }

  showSelectedVal() {
    alert('You selected some value from options');
  }

  mouseOver(message: string) {
    console.log('Hovered', message);
  }

  changeText() {
    this.cart.set('Cart Products: 3');
  }
}

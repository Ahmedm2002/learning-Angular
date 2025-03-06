import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  imports: [],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css',
})
export class DataBindingComponent {
  angular: string = 'Angular version 18';
  tutor: string = 'Learning Partner';
  tutorialDuration: number = 3.05;
  namePlaceholder = 'Enter Name E.g: John Doe';
  dataBindingStyles: string = 'text-danger m-3';

  showMsg() {
    alert('Downloading started .......');
  }

  showSelectedVal() {
    alert('You selected some value from options');
  }
}

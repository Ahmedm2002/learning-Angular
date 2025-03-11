import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  isVisible: boolean = false;
  names: string[] = [
    '',
    'John Doe',
    'Jane Smith',
    'Alice Johnson',
    'Bob Brown',
  ];

  togglevisibility() {
    this.isVisible = !this.isVisible;
  }

  num1: number = 12;
  num2: number = 12;

  isActive: boolean = false;

  selectedCountry: string = '';

  peoples: Person[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      age: 30,
      email: 'john.doe@example.com',
      isAvailable: true,
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      age: 25,
      email: 'jane.smith@example.com',
      isAvailable: false,
    },
    {
      firstName: 'Alice',
      lastName: 'Johnson',
      age: 28,
      email: 'alice.johnson@example.com',
      isAvailable: true,
    },
    {
      firstName: 'Bob',
      lastName: 'Brown',
      age: 35,
      email: 'bob.brown@example.com',
      isAvailable: true,
    },
  ];
}

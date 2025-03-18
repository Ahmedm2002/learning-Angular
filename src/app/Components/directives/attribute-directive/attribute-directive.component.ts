import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Person {
  firstName: string;
  lastName: string;
  age: number;
  email: string;
  isAvailable: boolean;
}

@Component({
  selector: 'app-attribute-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directive.component.html',
  styleUrl: './attribute-directive.component.css',
})
export class AttributeDirectiveComponent {
  div1BgColor: string = 'bg-info';
  undifinedVal: any = NaN;

  makeRed() {
    this.div1BgColor = 'bg-danger';
  }

  makeYellow() {
    this.div1BgColor = 'bg-warning';
  }

  isDivActive: boolean = true;
  isActive: boolean = true;

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

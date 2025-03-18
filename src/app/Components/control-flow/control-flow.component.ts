import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Person } from '../directives/attribute-directive/attribute-directive.component';
@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css',
})
export class ControlFlowComponent {
  div1Visibility: boolean = true;
  userExists: boolean = false;

  laptopCompanies: string[] = ['HP', 'Dell', 'Stone', 'Apple', 'Lenovo'];
  selectedCompany: string = '';

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

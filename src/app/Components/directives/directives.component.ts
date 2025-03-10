import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css',
})
export class DirectivesComponent {
  isVisible: boolean = false;
  names: string[] = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown'];

  togglevisibility() {
    this.isVisible = !this.isVisible;
  }

  num1: number = 12;
  num2: number = 12;
}

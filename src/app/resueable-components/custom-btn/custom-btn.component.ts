import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-btn',
  imports: [],
  templateUrl: './custom-btn.component.html',
  styleUrl: './custom-btn.component.css',
})
export class CustomBtnComponent {
  @Input() btnText: String = '';
  @Input() btnStyles: String = '';

  @Output() onBtnClick = new EventEmitter<any>();

  onClick() {
    this.onBtnClick.emit('Value passed to parent from child');
  }
}

import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AlertComponent } from '../../alert/alert.component';

@Component({
  selector: 'app-view-child',
  imports: [AlertComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css',
})
export class ViewChildComponent implements AfterViewInit {
  @ViewChild('nameInput') nameInput?: ElementRef;
  @ViewChild(AlertComponent) alertComp?: AlertComponent;
  ngAfterViewInit(): void {
    console.log(this.nameInput?.nativeElement.value);
    console.log(this.alertComp?.alertCompVar);
  }
}

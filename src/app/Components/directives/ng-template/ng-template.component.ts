import { CommonModule } from '@angular/common';
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css',
})
export class NgTemplateComponent {
  isLoggedIn: boolean = false;
  userName: string = 'Alice John';
  toggleLogInStatus() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  @ViewChild('dynamicPara') paragraph: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer', { read: ViewContainerRef }) container:
    | TemplateRef<any>
    | undefined;
  loadHtml() {
    if (this.paragraph) {
      this.container?.createEmbeddedView(this.paragraph);
    }
  }
}

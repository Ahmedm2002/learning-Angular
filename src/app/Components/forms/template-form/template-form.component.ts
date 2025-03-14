// import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { zip } from 'rxjs';

@Component({
  selector: 'app-template-form',
  // imports: [FormsModule, JsonPipe],
  imports: [FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  userData: any = {
    firstName: '',
    lastName: '',
    userName: '',
    city: '',
    state: '',
    zip: '',
    accetpedTerms: false,
  };

  formValues: any;

  onSubmit() {
    debugger;
    this.formValues = this.userData;
    console.log(this.formValues);
    this.userData = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zip: '',
      accetpedTerms: false,
    };
    alert('Data successfully submitted');
  }

  resetForm() {
    this.userData = {
      firstName: '',
      lastName: '',
      userName: '',
      city: '',
      state: '',
      zip: '',
      accetpedTerms: false,
    };
  }
}

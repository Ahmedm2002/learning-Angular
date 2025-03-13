import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsHomeComponent } from './forms-home.component';

describe('FormsHomeComponent', () => {
  let component: FormsHomeComponent;
  let fixture: ComponentFixture<FormsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

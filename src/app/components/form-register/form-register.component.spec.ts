import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRegisterComponent } from './FormRegisterComponent';

describe('FormRegisterComponent', () => {
  let component: FormRegisterComponent;
  let fixture: ComponentFixture<FormRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormRegisterComponent],
    });
    fixture = TestBed.createComponent(FormRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

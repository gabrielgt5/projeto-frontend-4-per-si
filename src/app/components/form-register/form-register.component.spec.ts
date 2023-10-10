import { FormRegisterComponent } from './form-register.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

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

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductRegistrationComponentComponent } from './product-registration-component.component';

describe('ProductRegistrationComponentComponent', () => {
  let component: ProductRegistrationComponentComponent;
  let fixture: ComponentFixture<ProductRegistrationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductRegistrationComponentComponent]
    });
    fixture = TestBed.createComponent(ProductRegistrationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

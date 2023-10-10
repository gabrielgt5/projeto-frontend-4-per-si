import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductComponent } from './my-product.component';

describe('MyProductComponent', () => {
  let component: MyProductComponent;
  let fixture: ComponentFixture<MyProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyProductComponent]
    });
    fixture = TestBed.createComponent(MyProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

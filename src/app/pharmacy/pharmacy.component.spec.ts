import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PharmacyComponent } from './pharmacy.component';

describe('PharmacyComponent', () => {
  let fixture: ComponentFixture<PharmacyComponent>;
  let component: PharmacyComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PharmacyComponent],
    });

    fixture = TestBed.createComponent(PharmacyComponent);
    component = fixture.componentInstance;
  });

  it('should create the PharmacyComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the "Order Now" button', () => {
    const orderButton = fixture.nativeElement.querySelector('a.btn.btn-primary');
    expect(orderButton.textContent).toContain('Order Now');
  });

});
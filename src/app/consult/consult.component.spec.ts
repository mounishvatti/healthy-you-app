import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultComponent } from './consult.component';

describe('ConsultComponent', () => {
  let fixture: ComponentFixture<ConsultComponent>;
  let component: ConsultComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultComponent],
    });

    fixture = TestBed.createComponent(ConsultComponent);
    component = fixture.componentInstance;
  });

  it('should create the ConsultComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the "Consult Now" button', () => {
    const consultButton = fixture.nativeElement.querySelector('a.btn.btn-primary');
    expect(consultButton.textContent).toContain('Consult Now');
  });

  it('should display form fields for making an appointment', () => {
    const fullNameInput = fixture.nativeElement.querySelector('input[placeholder="Full name"]');
    const emailInput = fixture.nativeElement.querySelector('input[placeholder="Email address.."]');
    const dateInput = fixture.nativeElement.querySelector('input[type="date"]');
    const departmentSelect = fixture.nativeElement.querySelector('select#departement');
    const numberInput = fixture.nativeElement.querySelector('input[placeholder="Number.."]');
    const messageTextArea = fixture.nativeElement.querySelector('textarea#message');
    const submitButton = fixture.nativeElement.querySelector('button.btn.btn-primary');
  
    expect(fullNameInput).toBeTruthy();
    expect(emailInput).toBeTruthy();
    expect(dateInput).toBeTruthy();
    expect(departmentSelect).toBeTruthy();
    expect(numberInput).toBeTruthy();
    expect(messageTextArea).toBeTruthy();
    expect(submitButton).toBeTruthy();
  });
  
});
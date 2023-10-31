import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component'; // Updated import

describe('HomeComponent', () => {
  let fixture: ComponentFixture<HomeComponent>; // Updated
  let component: HomeComponent; // Updated

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent], // Updated
    });

    fixture = TestBed.createComponent(HomeComponent); // Updated
    component = fixture.componentInstance; // Updated
  });

  it('should create the HomeComponent', () => { // Updated
    expect(component).toBeTruthy();
  });

  it('should display the title', () => { // Updated
    const titleElement = fixture.nativeElement.querySelector('h1');
    expect(titleElement.textContent).toContain('Home Component'); // Updated
  });
});
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { AppComponent } from './app.component';
import { LoginComponent } from 'src/app/login/login.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        LoginComponent,
      ],
      imports: [
        MatCardModule,
        MatFormFieldModule, // Add MatFormFieldModule to the imports
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });



  it('should have the title healthy-you-app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('healthy-you-app');
  });

  it('should contain a App component', () => {
    const loginFixture = TestBed.createComponent(AppComponent);
    const loginComponent = loginFixture.debugElement.componentInstance;
    expect(loginComponent).toBeTruthy();
  });

 
});
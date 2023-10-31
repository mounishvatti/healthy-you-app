import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YogaComponent } from './yoga.component';

describe('YogaComponent', () => {
  let fixture: ComponentFixture<YogaComponent>;
  let component: YogaComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YogaComponent],
    });

    fixture = TestBed.createComponent(YogaComponent);
    component = fixture.componentInstance;
  });

  it('should create the YogaComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display at least one yoga blog', () => {
    const yogaBlogs = fixture.nativeElement.querySelectorAll('.card-blog');
    expect(yogaBlogs.length).toBeGreaterThan(0);
  });

  it('should have a BMI calculator form', () => {
    const bmiForm = fixture.nativeElement.querySelector('#bmi-form');
    expect(bmiForm).toBeTruthy();
  });

 
  });
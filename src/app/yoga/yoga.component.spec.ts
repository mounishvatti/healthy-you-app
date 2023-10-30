import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaComponent } from './yoga.component';

describe('YogaComponent', () => {
  let component: YogaComponent;
  let fixture: ComponentFixture<YogaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YogaComponent]
    });
    fixture = TestBed.createComponent(YogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

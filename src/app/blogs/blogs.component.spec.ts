import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogsComponent } from './blogs.component';

describe('BlogsComponent', () => {
  let fixture: ComponentFixture<BlogsComponent>;
  let component: BlogsComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogsComponent],
    });

    fixture = TestBed.createComponent(BlogsComponent);
    component = fixture.componentInstance;
  });

  it('should create the BlogsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should display the blog title', () => {
    const title = fixture.nativeElement.querySelector('h2.post-title');
    expect(title).toBeTruthy();
    expect(title.textContent).toContain('List of Countries without Coronavirus case');
  });

  it('should have a comment form', () => {
    const commentForm = fixture.nativeElement.querySelector('.comment-form-wrap form');
    expect(commentForm).toBeTruthy();
  });
});
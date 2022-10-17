import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
// import { By } from 'protractor';

import { NewPostComponent } from './new-post.component';

describe('NewPostComponent', () => {
  let component: NewPostComponent;
  let fixture: ComponentFixture<NewPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Display Global total Likes', () => {
    let debugElement = fixture.debugElement.query(By.css('.globalTotalLikes'));
    let htmlElement: HTMLElement = debugElement.nativeElement;
    console.log(htmlElement);
    expect(htmlElement.innerText).toContain('4');
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeStoryComponent } from './like-story.component';

describe('LikeStoryComponent', () => {
  let component: LikeStoryComponent;
  let fixture: ComponentFixture<LikeStoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeStoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

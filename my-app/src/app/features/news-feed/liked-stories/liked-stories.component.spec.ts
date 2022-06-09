import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedStoriesComponent } from './liked-stories.component';

describe('LikedStoriesComponent', () => {
  let component: LikedStoriesComponent;
  let fixture: ComponentFixture<LikedStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikedStoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikedStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

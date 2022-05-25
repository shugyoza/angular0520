import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrPageNotFoundComponent } from './err-page-not-found.component';

describe('ErrPageNotFoundComponent', () => {
  let component: ErrPageNotFoundComponent;
  let fixture: ComponentFixture<ErrPageNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrPageNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrPageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

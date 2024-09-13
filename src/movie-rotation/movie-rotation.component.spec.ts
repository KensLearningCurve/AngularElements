import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieRotationComponent } from './movie-rotation.component';

describe('MovieRotationComponent', () => {
  let component: MovieRotationComponent;
  let fixture: ComponentFixture<MovieRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieRotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

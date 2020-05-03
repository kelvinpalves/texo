import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieWinnersComponent } from './movie-winners.component';

describe('MovieWinnersComponent', () => {
  let component: MovieWinnersComponent;
  let fixture: ComponentFixture<MovieWinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieWinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieWinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

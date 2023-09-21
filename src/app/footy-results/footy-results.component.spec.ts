import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootyResultsComponent } from './footy-results.component';

describe('FootyResultsComponent', () => {
  let component: FootyResultsComponent;
  let fixture: ComponentFixture<FootyResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootyResultsComponent]
    });
    fixture = TestBed.createComponent(FootyResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

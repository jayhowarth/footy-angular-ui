import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootyFixturesComponent } from './footy-fixtures.component';

describe('FootyFixturesComponent', () => {
  let component: FootyFixturesComponent;
  let fixture: ComponentFixture<FootyFixturesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootyFixturesComponent]
    });
    fixture = TestBed.createComponent(FootyFixturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

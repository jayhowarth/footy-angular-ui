import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootyHomeComponent } from './footy-home.component';

describe('FootyHomeComponent', () => {
  let component: FootyHomeComponent;
  let fixture: ComponentFixture<FootyHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FootyHomeComponent]
    });
    fixture = TestBed.createComponent(FootyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

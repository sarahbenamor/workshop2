import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApartmentsbyresidenceComponent } from './apartmentsbyresidence.component';

describe('ApartmentsbyresidenceComponent', () => {
  let component: ApartmentsbyresidenceComponent;
  let fixture: ComponentFixture<ApartmentsbyresidenceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApartmentsbyresidenceComponent]
    });
    fixture = TestBed.createComponent(ApartmentsbyresidenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

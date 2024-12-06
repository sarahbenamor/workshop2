import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddapartmentComponent } from './addapartment.component';

describe('AddapartmentComponent', () => {
  let component: AddapartmentComponent;
  let fixture: ComponentFixture<AddapartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddapartmentComponent]
    });
    fixture = TestBed.createComponent(AddapartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

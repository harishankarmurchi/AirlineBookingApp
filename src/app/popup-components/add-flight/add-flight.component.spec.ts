import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFlightPopupComponent } from './add-flight.component';

describe('AddFlightComponent', () => {
  let component: AddFlightPopupComponent;
  let fixture: ComponentFixture<AddFlightPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFlightPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFlightPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

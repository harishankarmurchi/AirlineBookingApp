import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPopupComponent } from './flight-popup.component';

describe('FlightPopupComponent', () => {
  let component: FlightPopupComponent;
  let fixture: ComponentFixture<FlightPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

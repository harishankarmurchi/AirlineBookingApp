import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AilinePopupComponent } from './ailine-popup.component';

describe('AilinePopupComponent', () => {
  let component: AilinePopupComponent;
  let fixture: ComponentFixture<AilinePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AilinePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AilinePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsWrapperStepperVertical } from './dynamic-forms-wrapper-stepper-vertical.type';

describe('DynamicFormsWrapperStepperVertical', () => {
  let component: DynamicFormsWrapperStepperVertical;
  let fixture: ComponentFixture<DynamicFormsWrapperStepperVertical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormsWrapperStepperVertical],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsWrapperStepperVertical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsTypeStepper } from './dynamic-forms-type-stepper.type';

describe('DynamicFormsTypeStepper', () => {
  let component: DynamicFormsTypeStepper;
  let fixture: ComponentFixture<DynamicFormsTypeStepper>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormsTypeStepper],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsTypeStepper);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

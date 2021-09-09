import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsTypeInput } from './dynamic-forms-type-input.type';

describe('DynamicFormsTypeInput', () => {
  let component: DynamicFormsTypeInput;
  let fixture: ComponentFixture<DynamicFormsTypeInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormsTypeInput],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsTypeInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

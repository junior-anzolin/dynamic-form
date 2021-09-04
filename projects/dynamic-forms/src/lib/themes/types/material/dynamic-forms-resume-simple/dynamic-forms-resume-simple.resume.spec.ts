import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormsResumeSimple } from './dynamic-forms-resume-simple.resume';

describe('DynamicFormsResumeSimple', () => {
  let component: DynamicFormsResumeSimple;
  let fixture: ComponentFixture<DynamicFormsResumeSimple>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormsResumeSimple],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormsResumeSimple);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

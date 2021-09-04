import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormToEditComponent } from './dynamic-form-to-edit.component';

describe('DynamicFormToEditComponent', () => {
  let component: DynamicFormToEditComponent;
  let fixture: ComponentFixture<DynamicFormToEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicFormToEditComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormToEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

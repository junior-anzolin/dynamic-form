import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFormToViewComponent } from './dynamic-form-to-view.component';

describe('DynamicFormToViewComponent', () => {
  let component: DynamicFormToViewComponent;
  let fixture: ComponentFixture<DynamicFormToViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicFormToViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFormToViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

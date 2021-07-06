import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputType } from './input.type';

describe('InputType', () => {
  let component: InputType;
  let fixture: ComponentFixture<InputType>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputType ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputType);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormToEditComponent } from './dynamic-form-to-edit.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [
    DynamicFormToEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
  ],
  exports: [
    DynamicFormToEditComponent
  ]
})
export class DynamicFormToEditModule { }

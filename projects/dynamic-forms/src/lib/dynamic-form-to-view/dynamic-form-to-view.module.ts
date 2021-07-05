import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormToViewComponent } from './dynamic-form-to-view.component';
import { FormlyModule } from '@ngx-formly/core';

@NgModule({
  declarations: [
    DynamicFormToViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
  ],
  exports: [
    DynamicFormToViewComponent
  ]
})
export class DynamicFormToViewModule { }

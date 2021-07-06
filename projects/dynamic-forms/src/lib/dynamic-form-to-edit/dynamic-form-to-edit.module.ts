import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormToEditComponent } from './dynamic-form-to-edit.component';
import { FormlyModule } from '@ngx-formly/core';

import types from '../themes/types/types';
import wrappers from '../themes/wrappers/wrapper';
import { InputType } from '../themes/types/input/input.type';

@NgModule({
  declarations: [DynamicFormToEditComponent, InputType],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Este campo é obrigatório' },
      ],
      types,
      wrappers,
    }),
  ],
  exports: [DynamicFormToEditComponent],
})
export class DynamicFormToEditModule {}

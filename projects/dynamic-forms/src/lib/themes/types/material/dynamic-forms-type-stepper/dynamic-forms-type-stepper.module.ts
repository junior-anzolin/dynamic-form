import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { DynamicFormsModule } from 'projects/dynamic-forms/src/public-api';
import { DynamicFormsTypeStepper } from './dynamic-forms-type-stepper.type';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DynamicFormsTypeStepper],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    FormlyModule,
    MatStepperModule,
    MatIconModule,

    DynamicFormsModule.forChild({
      types: [
        {
          unique: {
            name: 'stepper',
            component: DynamicFormsTypeStepper,
          },
        },
      ],
    }),
  ],
})
export class DynamicFormsTypeStepperModule {}

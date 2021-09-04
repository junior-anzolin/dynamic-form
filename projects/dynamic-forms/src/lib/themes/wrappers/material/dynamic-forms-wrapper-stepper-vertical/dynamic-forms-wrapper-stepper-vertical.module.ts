import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicFormsWrapperStepperVertical } from './dynamic-forms-wrapper-stepper-vertical.type';
import { DynamicFormsModule } from 'projects/dynamic-forms/src/public-api';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [DynamicFormsWrapperStepperVertical],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,

    DynamicFormsModule.forChild({
      wrappers: [
        {
          unique: {
            name: 'stepper-vertical',
            component: DynamicFormsWrapperStepperVertical,
          },
        },
      ],
    }),
  ],
})
export class DynamicFormsWrapperStepperVerticalModule {}

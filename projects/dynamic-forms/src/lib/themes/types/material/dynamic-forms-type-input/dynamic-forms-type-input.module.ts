import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormsTypeInput } from './dynamic-forms-type-input.type';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { DynamicFormsModule } from 'projects/dynamic-forms/src/lib/dynamic-forms.module';
import { DynamicFormsResumeSimple } from '../dynamic-forms-resume-simple';
import { DynamicFormsResumeSimpleModule } from '../dynamic-forms-resume-simple';
import { DynamicFormsWrapperStepperVerticalModule } from '../../../wrappers/material/dynamic-forms-wrapper-stepper-vertical/dynamic-forms-wrapper-stepper-vertical.module';

@NgModule({
  declarations: [DynamicFormsTypeInput],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    DynamicFormsResumeSimpleModule,
    DynamicFormsWrapperStepperVerticalModule,

    DynamicFormsModule.forChild({
      types: [
        {
          edit: {
            name: 'input',
            component: DynamicFormsTypeInput,
          },
          view: {
            name: 'input',
            component: DynamicFormsResumeSimple,
          },
        },
        {
          edit: {
            name: 'string',
            component: DynamicFormsTypeInput,
          },
          view: {
            name: 'string',
            component: DynamicFormsResumeSimple,
          },
        },
        {
          edit: {
            name: 'number',
            component: DynamicFormsTypeInput,
            defaultOptions: {
              templateOptions: {
                type: 'number',
              },
            },
          },
          view: {
            name: 'number',
            component: DynamicFormsResumeSimple,
          },
        },
        {
          edit: {
            name: 'integer',
            component: DynamicFormsTypeInput,
            defaultOptions: {
              templateOptions: {
                type: 'number',
              },
            },
          },
          view: {
            name: 'integer',
            component: DynamicFormsResumeSimple,
          },
        },
      ],
    }),
  ],
})
export class DynamicFormsTypeInputModule {}

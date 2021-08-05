import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormToEditComponent } from './dynamic-form-to-edit.component';
import { FormlyFormBuilder, FormlyModule, FORMLY_CONFIG } from '@ngx-formly/core';
import { FormlyConfig } from '@ngx-formly/core';
import { ConfigOption, TypeOption } from '@ngx-formly/core/lib/services/formly.config';

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
export class DynamicFormToEditModule {
  static forRoot(): ModuleWithProviders<DynamicFormToEditModule> {
    return {
      providers: [
        {
            provide: FORMLY_CONFIG,
            useFactory: (config: TypeOption) => {
            return config;
          },
          multi: true,
          deps: ['DYNAMIC_FORMS_EDIT'],
        },
      ],
      ngModule: DynamicFormToEditModule,
    };
  }
}


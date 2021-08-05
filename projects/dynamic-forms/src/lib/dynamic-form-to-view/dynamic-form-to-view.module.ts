import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormToViewComponent } from './dynamic-form-to-view.component';
import { FormlyConfig, FormlyFormBuilder, FormlyModule, FORMLY_CONFIG,  } from '@ngx-formly/core';
import { ConfigOption, TypeOption } from '@ngx-formly/core/lib/services/formly.config';

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
export class DynamicFormToViewModule {
  static forRoot(): ModuleWithProviders<DynamicFormToViewModule> {
    return {
      providers: [
        { 
          provide: FORMLY_CONFIG,
          useFactory: (config: TypeOption) => {
            return config;
          },
          multi: true,
          deps: ['DYNAMIC_FORMS_VIEW']
        },
      ],
      ngModule: DynamicFormToViewModule,
    };
  }
}

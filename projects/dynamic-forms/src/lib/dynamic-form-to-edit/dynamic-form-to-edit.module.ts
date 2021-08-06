import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormToEditComponent } from './dynamic-form-to-edit.component';
import { FormlyFormBuilder, FormlyModule } from '@ngx-formly/core';
import { FormlyConfig } from '@ngx-formly/core';
import { ConfigOption } from '@ngx-formly/core/lib/services/formly.config';
import { FormlyConfigRoot } from '../formly-config-tenant';

@NgModule({
  providers: [
    FormlyFormBuilder,
  ],
  declarations: [
    DynamicFormToEditComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormlyModule,
  ],
  exports: [
    DynamicFormToEditComponent
  ]
})
export class DynamicFormToEditModule {
  static forRoot(): ModuleWithProviders<DynamicFormToEditModule> {
    return {
      providers: [
        {provide: FormlyConfig, useExisting: FormlyConfigRoot,},
        ...FormlyModule.forRoot().providers!.filter((_, k) => k==0)
      ],
      ngModule: DynamicFormToEditModule,
    };
  }
  constructor(
    configService: FormlyConfig,
    @Inject('DYNAMIC_FORMS_EDIT') configs: ConfigOption[] = [],
  ) {
    if (!configs) {
      return;
    }
    configs.forEach((config) => configService.addConfig(config));
  }
}



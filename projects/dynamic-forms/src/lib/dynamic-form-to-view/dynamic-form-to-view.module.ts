import { Inject, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormToViewComponent } from './dynamic-form-to-view.component';
import {
  FormlyFormBuilder,
  FormlyModule,
  FormlyConfig,
} from '@ngx-formly/core';
import { ConfigOption } from '@ngx-formly/core/lib/services/formly.config';
import { FormlyConfigRoot } from '../formly-config-tenant';

@NgModule({
  providers: [FormlyFormBuilder],
  declarations: [DynamicFormToViewComponent],
  imports: [CommonModule, ReactiveFormsModule, FormlyModule],
  exports: [DynamicFormToViewComponent],
})
export class DynamicFormToViewModule {
  static forRoot(): ModuleWithProviders<DynamicFormToViewModule> {
    return {
      providers: [
        { provide: FormlyConfig, useExisting: FormlyConfigRoot },
        ...FormlyModule.forRoot().providers!.filter((_, k) => k == 0),
      ],
      ngModule: DynamicFormToViewModule,
    };
  }
  constructor(
    configService: FormlyConfig,
    @Inject('DYNAMIC_FORMS_VIEW') configs: ConfigOption[] = [],
  ) {
    if (!configs) {
      return;
    }
    configs.forEach((config) =>
      (configService as FormlyConfigRoot).addConfig(config, 'view'),
    );
  }
}

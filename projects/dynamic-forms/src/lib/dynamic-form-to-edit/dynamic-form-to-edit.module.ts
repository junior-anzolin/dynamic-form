import { Inject, Injectable, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormToEditComponent } from './dynamic-form-to-edit.component';
import { FormlyFormBuilder, FormlyModule, FORMLY_CONFIG } from '@ngx-formly/core';
import { FormlyConfig } from '@ngx-formly/core';
import { ConfigOption, TypeOption } from '@ngx-formly/core/lib/services/formly.config';

@Injectable()
export class FormlyConfigRoot extends FormlyConfig{
  constructor() {
    super();
    Object.assign(this, new FormlyConfig());
  }
}


@NgModule({
  providers: [
    {
      provide: FORMLY_CONFIG,
      useValue: {},
      multi: true,
    },
    {
      provide: FormlyConfig,
      useClass: FormlyConfigRoot,
    },
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
        FormlyFormBuilder,
        {
          provide: 'OTHER',
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
  constructor(
    configService: FormlyConfig, @Optional() @Inject('OTHERD') configs: ConfigOption[] = [] 
  ) {
    console.log(configService);
    if (!configs) {
      return;
    }
    //configs.forEach((config) => configService.addConfig(config));
  }
}



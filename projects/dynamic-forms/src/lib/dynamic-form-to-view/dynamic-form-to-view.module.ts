import { Inject, Injectable, InjectionToken, ModuleWithProviders, NgModule, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormToViewComponent } from './dynamic-form-to-view.component';
import { FormlyConfig, FormlyFormBuilder, FormlyModule, FORMLY_CONFIG,  } from '@ngx-formly/core';
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
          provide: 'OTHERD',
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

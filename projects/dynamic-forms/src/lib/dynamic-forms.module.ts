import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {
  DynamicFormConfig,
  DynamicFormConfigProvider,
} from './dynamic-form-config.type';
import { DynamicFormToEditModule } from './dynamic-form-to-edit/dynamic-form-to-edit.module';
import { DynamicFormToViewModule } from './dynamic-form-to-view/dynamic-form-to-view.module';
import { DynamicFormsComponent } from './dynamic-forms.component';

@NgModule({
  declarations: [DynamicFormsComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DynamicFormToEditModule.forRoot(),
    DynamicFormToViewModule.forRoot(),
  ],
  exports: [DynamicFormsComponent],
  schemas: [NO_ERRORS_SCHEMA],
})
export class DynamicFormsModule {
  static forRoot(
    config: DynamicFormConfig = {},
  ): ModuleWithProviders<DynamicFormsModule> {
    return {
      providers: [
        {
          provide: 'DYNAMIC_FORMS_EDIT',
          useValue: new DynamicFormConfigProvider(config).toFormlyConfig(
            'edit',
          ),
          multi: true,
        },
        {
          provide: 'DYNAMIC_FORMS_VIEW',
          useValue: new DynamicFormConfigProvider(config).toFormlyConfig(
            'view',
          ),
          multi: true,
        },
      ],
      ngModule: DynamicFormsModule,
    };
  }
  static forChild(
    config: DynamicFormConfig,
  ): ModuleWithProviders<DynamicFormsModule> {
    return {
      providers: [
        {
          provide: 'DYNAMIC_FORMS_EDIT',
          useValue: new DynamicFormConfigProvider(config).toFormlyConfig(
            'edit',
          ),
          multi: true,
        },
        {
          provide: 'DYNAMIC_FORMS_VIEW',
          useValue: new DynamicFormConfigProvider(config).toFormlyConfig(
            'view',
          ),
          multi: true,
        },
      ],
      ngModule: DynamicFormsModule,
    };
  }
}

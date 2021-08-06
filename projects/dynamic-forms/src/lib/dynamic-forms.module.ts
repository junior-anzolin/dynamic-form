import { ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DynamicFormsComponent } from './dynamic-forms.component';
import { DynamicFormToEditModule } from './dynamic-form-to-edit/dynamic-form-to-edit.module';
import { DynamicFormToViewModule } from './dynamic-form-to-view/dynamic-form-to-view.module';
import { CommonModule } from '@angular/common';
import { DynamicFormConfig, DynamicFormConfigProvider } from './dynamic-form-config.type';

@NgModule({
  declarations: [DynamicFormsComponent],
  imports: [
    CommonModule,
    DynamicFormToEditModule.forRoot(),
    DynamicFormToViewModule.forRoot(),
  ],
  exports: [DynamicFormsComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DynamicFormsModule {
  static forRoot(config: DynamicFormConfig): ModuleWithProviders<DynamicFormsModule> {
    return {
      providers: [
        { provide: 'DYNAMIC_FORMS_EDIT', useValue: new DynamicFormConfigProvider(config).toFormlyConfig('edit'), multi: true },
        { provide: 'DYNAMIC_FORMS_VIEW', useValue: new DynamicFormConfigProvider(config).toFormlyConfig('view'), multi: true },
      ],
      ngModule: DynamicFormsModule,
    };
  }
}

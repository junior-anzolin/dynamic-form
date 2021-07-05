import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DynamicFormsComponent } from './dynamic-forms.component';
import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { DynamicFormToEditModule } from './dynamic-form-to-edit/dynamic-form-to-edit.module';
import { DynamicFormToViewModule } from './dynamic-form-to-view/dynamic-form-to-view.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [DynamicFormsComponent],
  imports: [
    CommonModule,
    DynamicFormToEditModule,
    DynamicFormToViewModule,
  ],
  exports: [DynamicFormsComponent],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DynamicFormsModule {
  static forRoot(config?: ConfigOption): ModuleWithProviders<DynamicFormsModule> {
    return {
      ngModule: DynamicFormsModule,
    };
  }
}

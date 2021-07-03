import { NgModule } from '@angular/core';
import { DynamicFormsComponent } from './dynamic-forms.component';
import { FormlyModule } from '@ngx-formly/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DynamicFormsComponent],
  imports: [ReactiveFormsModule],
  exports: [DynamicFormsComponent],
})
export class DynamicFormsModule {
  forRoot() {
    return {};
  }
}

import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'lib-dynamic-forms',
  template: `<formly-form
    *ngIf="form"
    [form]="form"
    [fields]="fields"
  ></formly-form>`,
  styles: [],
})
export class DynamicFormsComponent {
  @Input()
  fields: FormlyFieldConfig[] = [];
  @Input()
  form: FormGroup = new FormGroup({});
}

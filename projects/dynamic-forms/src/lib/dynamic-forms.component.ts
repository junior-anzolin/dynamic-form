import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyConfig, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyConfigRoot } from './formly-config-tenant';

@Component({
  selector: 'lib-dynamic-forms',
  template: `
  <lib-dynamic-form-to-view *ngIf="mode$=='view'" [fields]="fields" [form]="form"></lib-dynamic-form-to-view>
  <lib-dynamic-form-to-edit *ngIf="mode$=='edit'" [fields]="fields" [form]="form"></lib-dynamic-form-to-edit>
  <button *ngIf="mode$=='edit'" (click)="changeMode()">Change Mode<button>
    `,
  styles: [],
})
export class DynamicFormsComponent {
  @Input()
  fields: FormlyFieldConfig[] = [
    {
      key: 'firstname',
      type: 'test-type',
    },
  ];
  @Input()
  form: FormGroup = new FormGroup({});

  mode$ = 'edit';
  @Input()
  set mode(value: 'edit' | 'view') {
    (this.formlyConfig as FormlyConfigRoot).setTenant(value);
    this.mode$ = value;
  }
  constructor(public formlyConfig: FormlyConfig,) {
  }
  changeMode() {
    this.mode = 'view';
  }
}

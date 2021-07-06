import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export enum FormMode {
  VIEW = 'view',
  EDIT = 'edit',
}

@Component({
  selector: 'lib-dynamic-forms',
  template: `
    <lib-dynamic-form-to-view
      *ngIf="mode === FormMode.VIEW"
      [fields]="fields"
      [form]="form"
    ></lib-dynamic-form-to-view>
    <lib-dynamic-form-to-edit
      *ngIf="mode === FormMode.EDIT"
      [fields]="fields"
      [form]="form"
    ></lib-dynamic-form-to-edit>
    <button (click)="changeMode()">Change Mode</button>
  `,
  styles: [],
})
export class DynamicFormsComponent {
  @Input()
  fields: FormlyFieldConfig[] = [];
  @Input()
  form: FormGroup = new FormGroup({});

  mode: FormMode = FormMode.VIEW;

  get FormMode() {
    return FormMode;
  }

  changeMode() {
    switch (this.mode) {
      case FormMode.EDIT:
        this.mode = FormMode.VIEW;
        break;
      case FormMode.VIEW:
        this.mode = FormMode.EDIT;
        break;
      default:
        this.mode = FormMode.VIEW;
        break;
    }
  }
}

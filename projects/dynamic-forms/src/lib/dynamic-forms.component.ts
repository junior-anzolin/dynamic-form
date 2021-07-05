import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'lib-dynamic-forms',
  template: `
  <lib-dynamic-form-to-view *ngIf="mode=='view'" [fields]="fields" [form]="form"></lib-dynamic-form-to-view>
  <lib-dynamic-form-to-edit *ngIf="mode=='edit'" [fields]="fields" [form]="form"></lib-dynamic-form-to-edit>
  <button *ngIf="mode=='view'" (click)="mode='edit'">Change Mode<button>
    `,
  styles: [],
})
export class DynamicFormsComponent {
  @Input()
  fields: FormlyFieldConfig[] = [];
  @Input()
  form: FormGroup = new FormGroup({});

  mode = 'view';

}

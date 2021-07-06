import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'lib-input',
  template: `<input
    [type]="type"
    [formControl]="control"
    [formlyAttributes]="field"
  />`,
  styles: [],
})
export class InputType extends FieldType {
  get type() {
    return this.to.type || 'text';
  }

  get control(): FormControl {
    return this.formControl as FormControl;
  }
}

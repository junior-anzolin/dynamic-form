import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
 selector: 'test-field-input',
 template: `
  view type
 `,
})
export class TestTypeInput extends FieldType {}
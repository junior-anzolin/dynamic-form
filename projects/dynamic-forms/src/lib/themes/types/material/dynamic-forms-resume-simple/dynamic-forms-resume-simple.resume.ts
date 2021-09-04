import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'lib-dynamic-forms-resume-simple',
  template: ' <p>dynamic-forms-resume-simple works!</p> ',
  styles: [],
})
export class DynamicFormsResumeSimple extends FieldType {
  constructor() {
    super();
  }
}

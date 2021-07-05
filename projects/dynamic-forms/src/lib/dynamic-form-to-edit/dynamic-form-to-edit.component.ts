import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'lib-dynamic-form-to-edit',
  templateUrl: './dynamic-form-to-edit.component.html',
  styleUrls: ['./dynamic-form-to-edit.component.css']
})
export class DynamicFormToEditComponent implements OnInit {

  @Input()
  fields: FormlyFieldConfig[] = [];
  @Input()
  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

}

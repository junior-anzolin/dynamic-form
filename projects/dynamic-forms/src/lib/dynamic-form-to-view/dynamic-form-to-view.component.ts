import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'lib-dynamic-form-to-view',
  templateUrl: './dynamic-form-to-view.component.html',
  styleUrls: ['./dynamic-form-to-view.component.css']
})
export class DynamicFormToViewComponent implements OnInit {

  @Input()
  fields: FormlyFieldConfig[] = [];
  @Input()
  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
  }

}

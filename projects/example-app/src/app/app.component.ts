import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'example-app';

  fields: FormlyFieldConfig[] = [
    {
      type: 'stepper',
      templateOptions: { orientation: 'vertical' },
      fieldGroup: [
        {
          templateOptions: { label: 'Personal data' },
          fieldGroup: [
            {
              key: 'firstname',
              type: 'input',
              templateOptions: {
                label: 'First name',
                required: true,
              },
            },
            {
              key: 'age',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Age',
                required: true,
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Second' },
          fieldGroup: [
            {
              key: 'firstname1',
              type: 'input',
              templateOptions: {
                label: 'First name',
                required: true,
              },
            },
            {
              key: 'age1',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Age',
                required: true,
              },
            },
          ],
        },
      ],
    },
    {
      type: 'stepper',
      templateOptions: { orientation: 'horizontal' },
      fieldGroup: [
        {
          templateOptions: { label: 'Personal data' },
          fieldGroup: [
            {
              key: 'firstname',
              type: 'input',
              templateOptions: {
                label: 'First name',
                required: true,
              },
            },
            {
              key: 'age',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Age',
                required: true,
              },
            },
          ],
        },
        {
          templateOptions: { label: 'Second' },
          fieldGroup: [
            {
              key: 'firstname1',
              type: 'input',
              templateOptions: {
                label: 'First name',
                required: true,
              },
            },
            {
              key: 'age1',
              type: 'input',
              templateOptions: {
                type: 'number',
                label: 'Age',
                required: true,
              },
            },
          ],
        },
      ],
    },
  ];
  form: FormGroup = new FormGroup({});

  value: any = {};

  ngOnInit() {
    this.form.valueChanges.subscribe((value: any) => {
      this.value = value;
      console.log(value);
    });
  }
}

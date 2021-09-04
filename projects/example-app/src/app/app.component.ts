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
      wrappers: ['stepper-vertical'],
      fieldGroup: [
        {
          key: 'name',
          type: 'input',
          templateOptions: {
            label: 'Name',
          },
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

import { Component } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'lib-dynamic-forms-wrapper-stepper-vertical',
  template: `
    <mat-stepper orientation="vertical">
      <mat-step>
        <ng-template matStepLabel>Step 1</ng-template>
        <ng-template matStepContent>
          <ng-container #fieldComponent></ng-container>
          <button mat-button matStepperNext>Next</button>
        </ng-template>
      </mat-step>
    </mat-stepper>
  `,
  styles: [],
})
export class DynamicFormsWrapperStepperVertical extends FieldWrapper {
  constructor() {
    super();
  }
}

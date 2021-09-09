import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'lib-dynamic-forms-type-stepper-vertical',
  template: `
    <mat-stepper
      [orientation]="field?.templateOptions?.orientation ?? 'vertical'"
      [linear]="field?.templateOptions?.linear ?? true"
    >
      <mat-step
        *ngFor="
          let step of field?.fieldGroup;
          let index = index;
          let last = last
        "
        [completed]="isValid(step)"
        state="edit"
      >
        <ng-template matStepperIcon>
          <mat-icon mat-icon-no-color>create</mat-icon>
        </ng-template>
        <ng-template matStepLabel>{{
          step?.templateOptions?.label
        }}</ng-template>
        <formly-field [field]="step"></formly-field>

        <div class="btn-step">
          <button
            mat-raised-button
            matStepperPrevious
            *ngIf="index !== 0"
            type="button"
          >
            Back
          </button>

          <button
            mat-raised-button
            color="primary"
            matStepperNext
            *ngIf="!last"
            type="button"
            [disabled]="!isValid(step)"
          >
            Next
          </button>

          <button
            mat-raised-button
            color="primary"
            *ngIf="last"
            [disabled]="!form.valid"
            type="submit"
          >
            Submit
          </button>
        </div>
      </mat-step>
    </mat-stepper>
  `,
  styles: [
    '.btn-step { text-align: right; }',
    '.btn-step button { margin: 8px 8px 8px 0; }',
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormsTypeStepper extends FieldType {
  isValid(field: FormlyFieldConfig): any {
    if (field.key) {
      return field?.formControl?.valid;
    }

    return field?.fieldGroup?.every((f) => this.isValid(f));
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'lib-dynamic-forms-type-input',
  template: `
    <mat-form-field class="full-width" appearance="standard">
      <mat-label>{{ to?.label }}</mat-label>
      <input
        *ngIf="type !== 'number'; else numberTmp"
        matInput
        [id]="id"
        [type]="type || 'text'"
        [readonly]="to?.readonly ?? false"
        [required]="to?.required ?? false"
        [formControl]="internalFormControl"
        [tabIndex]="to?.tabindex ?? 0"
        [placeholder]="to?.placeholder ?? ''"
      />
      <ng-template #numberTmp>
        <input
          matInput
          [id]="id"
          type="number"
          [readonly]="to?.readonly ?? false"
          [required]="to?.required ?? false"
          [formControl]="internalFormControl"
          [tabIndex]="to?.tabindex ?? 0"
          [placeholder]="to?.placeholder ?? ''"
        />
      </ng-template>
      <mat-error
        *ngIf="
          internalFormControl.hasError('email') &&
          !internalFormControl.hasError('required')
        "
      >
        Por favor insira um endereço de email válido
      </mat-error>
      <mat-error *ngIf="internalFormControl.hasError('required')">
        {{ to?.label }} é <strong>obrigatório</strong>
      </mat-error>
    </mat-form-field>
  `,
  styles: ['.full-width {width: 100%;}'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormsTypeInput extends FieldType {
  get internalFormControl(): FormControl {
    return (this.formControl as FormControl) ?? new FormControl();
  }

  get type() {
    return this.to.type ?? 'text';
  }
}

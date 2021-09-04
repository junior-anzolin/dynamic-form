import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'lib-dynamic-forms-type-input',
  template: `
    <input
      *ngIf="type !== 'number'; else numberTmp"
      matInput
      [id]="id"
      [type]="type || 'text'"
      [readonly]="to.readonly"
      [required]="to.required"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabIndex]="to.tabindex"
      [placeholder]="to.placeholder"
    />
    <ng-template #numberTmp>
      <input
        matInput
        [id]="id"
        type="number"
        [readonly]="to.readonly"
        [required]="to.required"
        [errorStateMatcher]="errorStateMatcher"
        [formControl]="formControl"
        [formlyAttributes]="field"
        [tabIndex]="to.tabindex"
        [placeholder]="to.placeholder"
      />
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicFormsTypeInput extends FieldType {
  get type() {
    return this.to.type ?? 'text';
  }
}

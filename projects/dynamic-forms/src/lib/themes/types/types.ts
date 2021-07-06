import { FormControl } from '@angular/forms';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { InputComponent } from './input/input.component';

const Types: TypeOption[] = [
  {
    name: 'input',
    component: InputComponent,
    defaultOptions: {
      formControl: new FormControl(),
    },
  },
];

export default Types;

import { FormControl } from '@angular/forms';
import { TypeOption } from '@ngx-formly/core/lib/services/formly.config';
import { InputType } from './input/input.type';

const Types: TypeOption[] = [
  {
    name: 'input',
    component: InputType,
    defaultOptions: {
      formControl: new FormControl(),
    },
    // wrappers: ['stepper', 'step'],
  },
];

export default Types;

import { WrapperOption } from '@ngx-formly/core/lib/services/formly.config';
import { StepperVerticalWrapper } from './stepper-vertical/stepper-vertical.wrapper';

const wrappers: WrapperOption[] = [
  {
    name: 'stepper-vertical',
    component: StepperVerticalWrapper,
  },
];

export default wrappers;

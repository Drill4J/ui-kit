import { storiesOf } from '@storybook/react';

import { FormGroup } from './form-group';
import { Input } from '../inputs/input';
import { Textarea } from '../inputs/textarea';
import { Icons } from '../../icon';

storiesOf('FormGroup with all props', module)
  .add('FormGroup', () => (
    <FormGroup label="Form" optional actions={<Icons.Info />}>
      <Input />
    </FormGroup>
  ))
  .add('FormGroup with optional prop', () => (
    <FormGroup label="Form" optional>
      <Input />
    </FormGroup>
  ))
  .add('FormGroup with optional prop', () => (
    <FormGroup label="Description" optional>
      <Textarea />
    </FormGroup>
  ))
  .add('FormGroup with actions prop', () => (
    <FormGroup label="Form" actions={<Icons.Info />}>
      <Input />
    </FormGroup>
  ));

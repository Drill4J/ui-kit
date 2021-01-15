import { storiesOf } from '@storybook/react';

import { FormGroup } from './form-group';
import { Input } from '../inputs/input';
import { Icons } from '../../components/icon';

storiesOf('FormGroup with all props', module).add('FormGroup', () => (
  <FormGroup
    label="Form"
    optional
    actions={<Icons.Info />}
  >
    <Input />
  </FormGroup>
))
  .add('FormGroup with optional prop', () => (
    <FormGroup
      label="Form"
      optional
    >
      <Input />
    </FormGroup>
  ))
  .add('FormGroup with actions prop', () => (
    <FormGroup
      label="Form"
      actions={<Icons.Info />}
    >
      <Input />
    </FormGroup>
  ));

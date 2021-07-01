import { storiesOf } from '@storybook/react';

import { NumberInput } from './number-input';

storiesOf('NumberInput', module).add('NumberInput types', () => (
  <>
    <h3>Simple input</h3>
    <NumberInput
      placeholder="enter text..."
      type="number"
    />
    <h3>Disabled input</h3>
    <NumberInput
      placeholder="enter text..."
      type="number"
      disabled
    />
    <h3>Error input</h3>
    <NumberInput
      placeholder="enter text..."
      type="number"
      error
    />
  </>
));

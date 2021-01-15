import { storiesOf } from '@storybook/react';

import { Input } from './input';

storiesOf('Input', module).add('Input types', () => (
  <>
    <h3>Simple input</h3>
    <Input
      placeholder="enter text..."
    />
    <h3>Disabled input</h3>
    <Input
      placeholder="enter text..."
      disabled
    />
    <h3>Error input</h3>
    <Input
      placeholder="enter text..."
      error
    />
  </>
));

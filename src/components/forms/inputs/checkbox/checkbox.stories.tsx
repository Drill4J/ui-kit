import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Checkbox } from './checkbox';

storiesOf('Checkbox', module).add('Checkbox', () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
      <label tw="text-blue-default">
        <Checkbox />
      </label>
      <label tw="text-red-default">
        <Checkbox />
      </label>
      <Checkbox />
    </div>
  );
});

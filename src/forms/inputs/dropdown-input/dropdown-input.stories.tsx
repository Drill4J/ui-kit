import { storiesOf } from '@storybook/react';

import { DropdownInput } from './dropdown-input';

storiesOf('DropdownInput', module).add('DropdownInput', () => (
  <div style={{ width: '50vw' }}>
    <DropdownInput
      options={
        [{ value: 'first', label: 'first' },
          { value: 'first', label: 'second' }]
      }
      value={{ value: 'first', label: 'first' }}
      onChange={() => {}}
    />
  </div>
));

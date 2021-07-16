import { storiesOf } from '@storybook/react';

import { Dropdown } from './dropdown';
import { useState } from 'react';

storiesOf('Dropdown', module).add('Dropdown', () => {
  const [value, setValue] = useState('first item')
  return (
    <Dropdown
      items={[
        {
          value: 'first item',
          label: 'first item',
        },
        {
          value: 'second item',
          label: 'second item adasd asd asda sda sda sd',
        },
      ]}
      selectedValue={value}
      action={(value) => setValue(value)}
    />
  );
});

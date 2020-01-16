import React from 'react';
import { storiesOf } from '@storybook/react';

import { Toggler } from './toggler';

storiesOf('Toggler', module).add('Toggler', () => {
  const [value, setValue] = React.useState(true);
  return (
    <Toggler
      label="toggler"
      value={value}
      onChange={() => (value ? setValue(false) : setValue(true))}
    />
  );
});

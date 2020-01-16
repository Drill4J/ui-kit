import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Checkbox } from './checkbox';

storiesOf('Checkbox', module).add('Checkbox', () => {
  const [checked, setChecked] = useState(false);
  return (
    <Checkbox
      checked={checked}
      label="checkbox"
      onChange={() => (checked ? setChecked(false) : setChecked(true))}
    />
  );
});

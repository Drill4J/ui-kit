import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Toggler } from './toggler';
import { Spinner } from '../../../components/spinner';

storiesOf('Toggler', module).add('Toggler', () => {
  const [value, setValue] = useState(true);
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', width: '300px' }}>
      <Toggler
        label="toggler"
        value={value}
        onChange={() => (value ? setValue(false) : setValue(true))}
      />
      <Toggler
        label="toggler"
        value={value}
        onChange={() => (value ? setValue(false) : setValue(true))}
        disabled
      />
      <Toggler
        label={<Spinner />}
        value={value}
        onChange={() => (value ? setValue(false) : setValue(true))}
      />
      <Toggler
        label={<Spinner />}
        value={value}
        onChange={() => (value ? setValue(false) : setValue(true))}
        disabled
      />
    </div>
  );
});

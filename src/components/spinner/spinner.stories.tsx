import { storiesOf } from '@storybook/react';

import { Spinner } from './spinner';

storiesOf('Spinner', module).add('Spinner', () => (
  <div>
    <Spinner />
    <br />
    <span style={{ background: '#000000' }}>
      <Spinner disabled />
    </span>
  </div>
));

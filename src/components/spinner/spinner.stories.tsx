import { storiesOf } from '@storybook/react';

import { Spinner } from './spinner';

storiesOf('Spinner', module).add('Spinner', () => (
  <div>
    <Spinner />
    <br />
    <Spinner disabled />
  </div>
));

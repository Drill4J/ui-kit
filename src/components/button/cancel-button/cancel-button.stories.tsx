import React from 'react';
import { storiesOf } from '@storybook/react';

import { CancelButton } from './cancel-button';

storiesOf('CancelButton', module)
  .add('Primary large', () => <CancelButton size="large">Primary large</CancelButton>)
  .add('Secondary small', () => <CancelButton size="small">Secondary small</CancelButton>);

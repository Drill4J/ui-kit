import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './button';

storiesOf('Button', module)
  .add('Primary large', () => (
    <Button type="primary" size="large">
      Primary large
    </Button>
  ))
  .add('Secondary small', () => (
    <Button type="secondary" size="small">
      Secondary small
    </Button>
  ));

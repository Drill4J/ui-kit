import React from 'react';
import { storiesOf } from '@storybook/react';

import { Badge } from './badge';

storiesOf('Badge', module)
  .add('with simple and bold text', () => (
    <div style={{ display: 'flex' }}>
      <Badge text="simple" />
      <Badge text="bold" bold />
    </div>
  ));

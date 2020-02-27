import React from 'react';
import { storiesOf } from '@storybook/react';

import { Badge } from './badge';

storiesOf('Badge', module)
  .add('with simple and bold text', () => (
    <div>
      <Badge>simple</Badge>
      <Badge bold>bold</Badge>
      <Badge color="green">Online</Badge>
      <Badge color="yellow">Busy</Badge>
      <Badge color="gray">Offline</Badge>
    </div>
  ));

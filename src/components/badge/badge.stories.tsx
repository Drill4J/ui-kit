import React from 'react';
import { storiesOf } from '@storybook/react';

import { Badge } from './badge';

storiesOf('Badge', module)
  .add('with simple and bold text', () => (
    <div style={{ display: 'flex', justifyContent: 'space-between', margin: '40px 0px' }}>
      <Badge>simple</Badge>
      <Badge bold>bold</Badge>
      <Badge color="green">Online</Badge>
      <Badge color="orange">Busy</Badge>
      <Badge color="red">Offline</Badge>
    </div>
  ));

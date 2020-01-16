import React from 'react';
import { storiesOf } from '@storybook/react';

import { OverflowText } from './overflow-text';

storiesOf('Overflowext', module).add('Overflow text', () => (
  <div style={{ width: '150px' }}>
    <OverflowText>Overflow text Overflow text</OverflowText>
  </div>
));

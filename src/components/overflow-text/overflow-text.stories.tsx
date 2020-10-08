import React from 'react';
import { storiesOf } from '@storybook/react';

import { OverflowText } from './overflow-text';

storiesOf('Overflowext', module).add('Overflow text', () => (
  <div style={{ padding: 10 }}>
    <div style={{ width: '150px' }}>
      <OverflowText>Overflow text Overflow text</OverflowText>
    </div>
    <div style={{ width: '70%' }}>
      <OverflowText>
        Overflow text Overflow text Overflow text Overflow text
        Overflow text Overflow text Overflow text Overflow text
        Overflow text Overflow text Overflow text Overflow text
        Overflow text Overflow text Overflow text Overflow text
      </OverflowText>
    </div>
    <div style={{ width: '300px' }}>
      <OverflowText>No Overflow text </OverflowText>
    </div>
  </div>
));

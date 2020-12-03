import React from 'react';
import { storiesOf } from '@storybook/react';

import { Legend } from './legend';

storiesOf('Legend', module).add('visualisation colors', () => (
  <Legend legendItems={[
    { label: 'build-cover', color: '#62adfc' },
    { label: 'overlapping', color: '#4f8ac9' },
    { label: 'scope-cover', color: '#aed4fd' },
  ]}
  />
));

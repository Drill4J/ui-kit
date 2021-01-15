import { storiesOf } from '@storybook/react';

import { Legend } from './legend';

storiesOf('Legend', module).add('visualisation colors', () => (
  <Legend legendItems={[
    { label: 'no fill', color: '#fff', borderColor: '#00b602' },
    { label: 'overlapping', color: '#4f8ac9' },
    { label: 'scope-cover', color: '#aed4fd' },
  ]}
  />
));

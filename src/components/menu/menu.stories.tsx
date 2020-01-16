import React from 'react';
import { storiesOf } from '@storybook/react';

import { Menu } from './menu';

storiesOf('menu', module).add('menu', () => (
  <Menu
    items={[
      {
        label: 'Rename',
        icon: 'Edit',
        onClick: () => {},
      },
    ]}
  />
));

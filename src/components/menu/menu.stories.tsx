import React from 'react';
import { storiesOf } from '@storybook/react';

import { Menu } from './menu';
import { Panel } from '../panel';

storiesOf('menu', module).add('menu', () => (
  <div>
    <Panel>
      <h1>Menu</h1>
      <Menu
        items={[
          {
            label: 'Rename',
            icon: 'Edit',
            onClick: () => alert('gg'),
          },
        ]}
      />
    </Panel>
  </div>
));

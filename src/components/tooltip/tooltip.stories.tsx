import React from 'react';
import { storiesOf } from '@storybook/react';

import { Panel } from '../../layouts';
import { Tooltip } from './tooltip';

storiesOf('Tooltip', module).add('Tooltip', () => (
  <Panel align="center">
    <Tooltip
      position="bottom"
      message={(
        <span>Tooltip</span>
      )}
    >
      <div>Tooltip</div>
    </Tooltip>
  </Panel>
));

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip } from './tooltip';
import { Panel } from '../panel';

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

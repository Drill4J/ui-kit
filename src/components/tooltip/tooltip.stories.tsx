import React from 'react';
import { storiesOf } from '@storybook/react';

import { Tooltip } from './tooltip';

storiesOf('Tooltip', module).add('Tooltip', () => (
  <Tooltip position="bottom" message="Tooltip">
    Tooltip
  </Tooltip>
));

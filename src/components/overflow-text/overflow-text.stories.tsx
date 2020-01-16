import React from 'react';
import { storiesOf } from '@storybook/react';

import { OverflowText } from './overflow-text';

storiesOf('OverflowText', module).add('OverflowText', () => (
  <OverflowText>foo bar</OverflowText>
));

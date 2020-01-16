import React from 'react';
import { storiesOf } from '@storybook/react';

import { Textarea } from './textarea';

storiesOf('Textarea', module).add('Textarea', () => (
  <Textarea value="Textarea component" onChange={() => {}} />
));

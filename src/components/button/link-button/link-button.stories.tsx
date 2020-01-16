import React from 'react';
import { storiesOf } from '@storybook/react';

import { LinkButton } from './link-button';

storiesOf('LinkButton', module)
  .add('Primary large', () => <LinkButton size="large">Primary large</LinkButton>)
  .add('Secondary small', () => <LinkButton size="small">Secondary small</LinkButton>);

import { storiesOf } from '@storybook/react';

import { SessionIndicator } from './session-indicator';

storiesOf('SessionIndicator', module)
  .add('SessionIndicator', () => (
    <>
      <SessionIndicator />
      <SessionIndicator active />
    </>
  ));

import { storiesOf } from '@storybook/react';

import { EllipsisOverflowText } from './ellipsis-overflow-text';

storiesOf('EllipsisOverflowText', module).add('Overflow text', () => (
  <div style={{ width: '150px' }}>
    <EllipsisOverflowText>Overflow text Overflow text</EllipsisOverflowText>
  </div>
));

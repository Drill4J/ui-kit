import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Badge } from './badge';

storiesOf('Badge', module)
  .add('with simple and bold text', () => (
    <div tw="flex justify-between w-full">
      <Badge>simple</Badge>
      <Badge bold>bold</Badge>
      <Badge color="green">Online</Badge>
      <Badge color="orange">Busy</Badge>
      <Badge color="red">Offline</Badge>
    </div>
  ));

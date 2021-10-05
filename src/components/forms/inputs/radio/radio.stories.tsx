import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Radio } from './radio';

storiesOf('Radio', module).add('Radio', () => (
  <form tw="flex gap-4 p-4 bg-monochrome-dark text-blue-default">
    <label>
      <Radio value="1" name="foo" />
    </label>
    <label>
      <Radio value="2" name="foo" />
    </label>
    <label>
      <Radio value="3" name="foo" />
    </label>
  </form>
));

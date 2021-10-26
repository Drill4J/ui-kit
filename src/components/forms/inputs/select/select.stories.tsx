import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Select } from './select';

storiesOf('Select', module).add('Select', () => (
  <div tw="bg-monochrome-dark100 w-full h-full p-10">
    <Select options={['Java', 'Js', 'Net']} placeholder="Choose your option" />
    <Select placeholder="Choose your option">
      <div>Select</div>
    </Select>
  </div>
));

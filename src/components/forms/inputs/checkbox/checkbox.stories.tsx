import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Checkbox } from './checkbox';
import { MultiSelectCheckbox } from './multi-select-checkbox';

storiesOf('Checkbox', module).add('Checkbox', () => (
  <div tw="flex gap-4 p-4 bg-monochrome-dark">
    <label tw="flex gap-4 text-blue-default">
      <Checkbox />
      <MultiSelectCheckbox allSelected />
    </label>
    <label tw="flex gap-4 text-red-default">
      <Checkbox />
      <MultiSelectCheckbox allSelected={false} />
    </label>
    <Checkbox />
    <MultiSelectCheckbox allSelected />
  </div>
));

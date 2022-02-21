import React, { useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import 'twin.macro';

import { SearchInput } from './search-input';

export default {
  title: 'SearchInput',
  component: SearchInput,
} as ComponentMeta<typeof SearchInput>;

export const Default: Story = (args) => {
  const { value } = args;
  const [stateValue, setStateValue] = useState(value || '');
  return (
    <div tw="bg-monochrome-white w-[300px]">
      <SearchInput
        placeholder="enter text..."
        value={stateValue}
        onChange={(event) => setStateValue(event.target.value)}
        reset={() => setStateValue('')}
      />
    </div>
  );
};

Default.args = { value: '' };

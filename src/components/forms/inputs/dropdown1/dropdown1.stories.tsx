import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Dropdown1 } from './dropdown1';

export default {
  title: 'Dropdown1',
  component: Dropdown1,
} as Meta;

export const DropdownExample: Story = (args) => {
  const { options } = args;
  const [value, setValue] = useState<any>('first item');
  return (
    <div tw="pt-[100px] w-[400px]">
      <Dropdown1
        options={options}
        onSelect={(newValue) => console.log(newValue)}
        placeholder="Choose your option"
      />
    </div>
  );
};
DropdownExample.args = {
  options: [
    {
      value: 'first item',
      label: 'first item',
    },
    {
      value: 'second item',
      label: 'second item with custom label',
    },
  ],
};

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Dropdown } from './dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
} as Meta;

export const Template: Story = (args) => {
  const { items } = args;
  const [value, setValue] = useState<any>('first item');
  return (
    <div tw="pt-[100px]">
      <Dropdown
        items={items}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </div>
  );
};
Template.args = {
  items: [
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

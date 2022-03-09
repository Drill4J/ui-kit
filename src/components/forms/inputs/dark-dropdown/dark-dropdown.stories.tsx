import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { DarkDropdown as DarkDropdownComponent } from './dark-dropdown';

export default {
  title: 'DarkDropdown',
  component: DarkDropdownComponent,
} as Meta;

export const Dropdown: Story = (args) => {
  const { options } = args;
  return (
    <div tw="pt-[100px] w-[400px]">
      <DarkDropdownComponent
        options={options}
        onSelect={(newValue) => console.log(newValue)}
        placeholder="Choose your option"
      />
    </div>
  );
};

export const DisabledDropdown: Story = (args) => {
  const { options } = args;
  return (
    <div tw="pt-[100px] w-[400px]">
      <DarkDropdownComponent
        options={options}
        onSelect={(newValue) => console.log(newValue)}
        placeholder="Choose your option"
        disabled
      />
    </div>
  );
};

Dropdown.args = {
  options: [
    {
      value: '1 item',
      label: 'first item',
    },
    {
      value: '2 item',
      label: '2 item',
    },
    {
      value: '3 item',
      label: '3 item',
    },
    {
      value: '4 item',
      label: '4 item',
    },
    {
      value: '5 item',
      label: '5 item',
    },
    {
      value: '6 item',
      label: '6 item',
    },
    {
      value: '7 item',
      label: '7 item',
    },
    {
      value: '8 item',
      label: '8 item',
    },
  ],
};

DisabledDropdown.args = {
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

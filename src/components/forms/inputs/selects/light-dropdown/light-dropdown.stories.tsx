import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { LightDropdown as LightDropdownComponent } from './light-dropdown';

export default {
  title: 'LightDropdown',
  component: LightDropdownComponent,
} as Meta;

export const Dropdown: Story = (args) => {
  const { options } = args;
  return (
    <div tw="pt-[100px] w-[250px]">
      <LightDropdownComponent
        options={options}
        onChange={(newValue) => console.log(newValue)}
        placeholder="Choose your option"
      />
    </div>
  );
};

Dropdown.args = {
  options: [
    {
      value: '1 item',
      label: 'Filter’s name that contains 40 characters',
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

import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Dropdown1 } from './dropdown1';

export default {
  title: 'Dropdown1',
  component: Dropdown1,
} as Meta;

export const Dropdown: Story = (args) => {
  const { options } = args;
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

export const DisabledDropdown: Story = (args) => {
  const { options } = args;
  return (
    <div tw="pt-[100px] w-[400px]">
      <Dropdown1
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
      value: 'first item',
      label: 'first item',
    },
    {
      value: 'second item',
      label: 'second item with custom label',
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

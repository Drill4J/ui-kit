import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Autocomplete as AutocompleteComponent } from './autocomplete';

export default {
  title: 'Autocomplete',
  component: AutocompleteComponent,
} as Meta;

export const Autocomplete: Story = (args) => {
  const { options } = args;
  return (
    <div tw="pt-[100px] w-[220px]">
      <AutocompleteComponent
        options={options}
        onSelect={(newValue) => console.log(newValue)}
        placeholder="Choose your option"
      />
    </div>
  );
};

Autocomplete.args = {
  options: Array.from({ length: 20 }, (_, i) => ({
    value: `${i} item`,
    label: `${i} item`,
  })),
};

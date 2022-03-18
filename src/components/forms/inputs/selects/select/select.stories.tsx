import React from 'react';
import { Meta, Story } from '@storybook/react';
import 'twin.macro';

import { Select as SelectComponent } from './select';

export default {
  title: 'Select1',
  component: SelectComponent,
} as Meta;

export const Dropdown: Story = (args) => (
  <div tw="pt-[100px] w-[400px]">
    <SelectComponent
      options={args.options}
    >
      {({
        options, selectedOption, isOpen, selectValue, setIsOpen,
      }) => (
        <>
          <SelectComponent.Input>
            {selectedOption
              ? <SelectComponent.SelectedValue>{selectedOption.label}</SelectComponent.SelectedValue>
              : <SelectComponent.Placeholder>Placeholder</SelectComponent.Placeholder>}
          </SelectComponent.Input>
          {isOpen && (
            <SelectComponent.ContainerWithSScroll>
              {options.map(({ label, value }) => (
                <SelectComponent.Option
                  selected={value === selectedOption?.value}
                  onClick={() => {
                    selectValue(value);
                    setIsOpen(false);
                  }}
                >
                  {label}
                </SelectComponent.Option>
              ))}
            </SelectComponent.ContainerWithSScroll>
          )}
        </>
      )}
    </SelectComponent>
  </div>
);

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

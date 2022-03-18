import React from 'react';
import 'twin.macro';

import { Select } from '../select';

interface OptionType {
  value: string;
  label: string;
  [key: string]: string;
}

interface Props {
  options: OptionType[];
  onChange: (value: string) => void;
  placeholder: string;
  defaultValue?: string;
  disabled?: boolean;
  displayingInInputAccessor?: string;
  className?: string;
}

export const LightDropdown = ({
  options: propsOptions, onChange, placeholder, defaultValue, disabled, displayingInInputAccessor = 'label', className,
}: Props) => (
  <Select
    options={propsOptions}
    defaultValue={defaultValue}
    className={className}
  >
    {({
      options, selectedOption, isOpen, selectValue, setIsOpen,
    }) => (
      <>
        <Select.Input disabled={disabled}>
          {selectedOption
            ? <Select.SelectedValue>{selectedOption[displayingInInputAccessor]}</Select.SelectedValue>
            : <Select.Placeholder>{placeholder}</Select.Placeholder>}
        </Select.Input>
        {isOpen && (
          <Select.Body>
            <Select.ContainerWithScroll>
              {options.map(({ label, value }) => (
                <Select.Option
                  selected={value === selectedOption?.value}
                  onClick={() => {
                    onChange(value);
                    selectValue(value);
                    setIsOpen(false);
                  }}
                >
                  {label}
                </Select.Option>
              ))}
            </Select.ContainerWithScroll>
          </Select.Body>
        )}
      </>
    )}
  </Select>
);

import { useMemo, useState } from 'react';
import 'twin.macro';

import { Popover } from '../../../../popover';
import {
  Expander, ScrollContainer, InputWrapper, Option,
} from '../elements';

interface OptionType {
  value: string;
  label: React.ReactNode;
}

interface Props {
  options: OptionType[];
  onSelect: (value: string) => void;
  placeholder: string;
  defaultValue?: string;
  disabled?: boolean;
}

export const LightDropdown = ({
  options, onSelect, placeholder, defaultValue, disabled,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);
  const selectedOption = useMemo(() => options.find(({ value }) => selectedValue === value), [selectedValue, options]);

  return (
    <Popover>
      {({ setIsOpen, isOpen }) => (
        <>
          <InputWrapper
            tw="flex justify-between items-center gap-x-1 cursor-pointer"
            isActive={isOpen}
            disabled={disabled}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedValue
              ? <span tw="text-monochrome-black" data-test="dropdown:selected-value">{selectedOption?.value}</span>
              : <span tw="text-monochrome-dark-tint">{placeholder}</span>}
            <Expander width={12} height={12} rotate={isOpen ? -90 : 90} />
          </InputWrapper>
          {isOpen && (
            <ScrollContainer tw="absolute z-50 top-11 py-2 w-full max-h-56 bg-monochrome-white">
              {options.map(({ label, value: itemValue }) => (
                <Option
                  data-test="dropdown:item"
                  onClick={() => {
                    setSelectedValue(itemValue);
                    onSelect(itemValue);
                    setIsOpen(false);
                  }}
                  key={itemValue}
                  selected={itemValue === selectedValue}
                >
                  {label}
                </Option>
              ))}
            </ScrollContainer>
          )}
        </>
      )}
    </Popover>
  );
};

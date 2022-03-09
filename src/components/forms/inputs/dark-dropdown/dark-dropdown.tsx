import { useMemo, useState } from 'react';
import tw, { styled } from 'twin.macro';

import { Popover } from '../../../popover';
import { Expander, ScrollContainer, InputWrapper } from './elements';

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

export const DarkDropdown = ({
  options, onSelect, placeholder, defaultValue, disabled,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);
  const selectedOption = useMemo(() => options.find(({ value }) => selectedValue === value), [selectedValue, options]);

  return (
    <Popover>
      {({ setIsOpen, isOpen }) => (
        <>
          <InputWrapper
            tw="flex justify-between items-center gap-x-1"
            isActive={isOpen}
            disabled={disabled}
            onClick={() => setIsOpen(!isOpen)}
          >
            {selectedValue
              ? <span tw="text-monochrome-medium-tint" data-test="dropdown:selected-value">{selectedOption?.label}</span>
              : <span tw="text-monochrome-dark">{placeholder}</span>}
            <Expander width={12} height={8} rotate={isOpen ? -90 : 90} />
          </InputWrapper>
          {isOpen && (
            <ScrollContainer tw="absolute z-50 top-11 py-2 w-full max-h-56">
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

const Option = styled.div<{ selected: boolean }>`
  ${tw`px-4 py-1 cursor-pointer`}
  ${tw`text-monochrome-medium-tint text-14 leading-20 whitespace-nowrap hover:bg-monochrome-white/10`}
  ${({ selected }) => selected && tw`text-blue-default`}
`;

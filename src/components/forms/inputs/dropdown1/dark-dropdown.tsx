import { useMemo, useState } from 'react';
import tw, { styled } from 'twin.macro';

import { Icons } from '../../../icon/index';
import { Popover } from '../../../popover';

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

const Expander = styled(Icons.Expander)`
  ${tw`text-monochrome-medium-tint`}
`;

const InputWrapper = styled.div<{ disabled?: boolean; isActive: boolean; }>`
  ${tw`py-2 px-4 cursor-pointer`}
  ${tw`box-border border border-monochrome-dark rounded bg-monochrome-black hover:border-monochrome-gray`}
  ${({ disabled }) => disabled && tw`bg-monochrome-dark100 hover:border-monochrome-dark100 pointer-events-none`}
  ${({ isActive }) => isActive && tw`border-monochrome-white`}

  &:hover ${Expander} {
    ${tw`text-blue-medium-tint`}
  }
`;

const ScrollContainer = styled.div`
  ${tw`overflow-auto rounded bg-monochrome-black`};

  &::-webkit-scrollbar {
    ${tw`rounded bg-monochrome-black`}
  }
;

  &::-webkit-scrollbar-thumb {
    ${tw`w-1 rounded bg-monochrome-default rounded-full border-4 border-solid border-monochrome-black`}
  }
;
`;

const Option = styled.div<{ selected: boolean }>`
  ${tw`px-4 py-1 cursor-pointer`}
  ${tw`text-monochrome-medium-tint text-14 leading-20 whitespace-nowrap hover:bg-monochrome-white/10`}
  ${({ selected }) => selected && tw`text-blue-default`}
`;

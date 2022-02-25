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
}

export const Dropdown1 = ({
  options, onSelect, placeholder, defaultValue,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);
  const selectedOption = useMemo(() => options.find(({ value }) => selectedValue === value), [selectedValue, options]);

  return (
    <Popover>
      {({ setIsOpen, isOpen }) => (
        <>
          <InputWrapper tw="flex justify-between items-center gap-x-1" onClick={() => setIsOpen(!isOpen)}>
            {selectedValue
              ? <span tw="text-monochrome-medium-tint" data-test="dropdown:selected-value">{selectedOption?.label}</span>
              : <span tw="text-monochrome-dark">{placeholder}</span>}
            <Expander width={12} height={8} rotate={isOpen ? -90 : 90} />
          </InputWrapper>
          {isOpen && (
            <ScrollContainer>
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

const InputWrapper = styled.div`
  ${tw`py-2 px-4 cursor-pointer`}
  ${tw`box-border border border-monochrome-dark rounded bg-monochrome-black hover:border-monochrome-gray`}
  
  &:hover ${Expander} {
    ${tw`text-blue-medium-tint`}
  }
`;

const ScrollContainer = styled.div`
  ${tw`absolute z-50 top-11 py-2 w-full max-h-56 overflow-auto rounded bg-monochrome-black`};
    &::-webkit-scrollbar {
      ${tw`w-1 rounded bg-monochrome-light-tint`}
    };

    &::-webkit-scrollbar-thumb {
      ${tw`w-1 rounded bg-monochrome-medium-tint`}
    };
`;

const Option = styled.div<{selected: boolean}>`
  ${tw`px-4 py-1 cursor-pointer`}
  ${tw`text-monochrome-medium-tint text-14 leading-20 whitespace-nowrap hover:bg-monochrome-white/10`}
  ${({ selected }) => selected && tw`text-blue-default`}
`;

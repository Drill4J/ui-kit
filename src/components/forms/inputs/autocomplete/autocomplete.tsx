import React, {
  memo, useCallback, useMemo, useState,
} from 'react';
import tw, { styled } from 'twin.macro';
import { FixedSizeList } from 'react-window';

import { Icons } from '../../../icon/index';
import { Popover } from '../../../popover';
import { SearchInput } from '../search-input';

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
const LIST_ITEM_HEIGHT = 28;
const MAX_LIST_CONTAINER_HEIGHT = 196;
export const Autocomplete = memo(({
  options, onSelect, placeholder, defaultValue, disabled,
}: Props) => {
  const [filterValue, setFilterValue] = useState('');
  const filteredOptions = useMemo(() => options.filter((option) => option.value.includes(filterValue)), [options, filterValue]);

  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue);
  const selectedOption = useMemo(() => options.find(({ value }) => selectedValue === value), [selectedValue, options]);

  return (
    <Popover>
      {({ setIsOpen, isOpen }) => {
        const renderOptions = useCallback(({ index, style }) => {
          const { value, label }: OptionType = filteredOptions[index];
          return (
            <Option
              data-test="autocomplete:option"
              style={style}
              onClick={() => {
                setSelectedValue(value);
                onSelect(value);
                setIsOpen(false);
              }}
              key={value}
              selected={value === selectedValue}
            >
              {label}
            </Option>
          );
        }, [filteredOptions]);

        return (
          <>
            <InputWrapper
              tw="flex justify-between items-center gap-x-1"
              isActive={isOpen}
              disabled={disabled}
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedValue
                ? <span tw="text-monochrome-black" data-test="autocomplete:selected-value">{selectedOption?.label}</span>
                : <span tw="text-monochrome-dark-tint">{placeholder}</span>}
              <Expander width={12} height={8} rotate={isOpen ? -90 : 90} />
            </InputWrapper>
            {isOpen && (
              <div tw="absolute z-50 top-11 py-2 w-full rounded bg-monochrome-white">
                <SearchInput tw="px-4 mb-4" placeholder="Search..." isOpen onChange={({ target: { value } }) => setFilterValue(value)} />
                <FixedSizeListWithCustomScroll
                  width="auto"
                  height={getFixedSizeListWithCustomScrollHeight(filteredOptions.length)}
                  itemSize={LIST_ITEM_HEIGHT}
                  itemCount={filteredOptions.length}
                >
                  {renderOptions}
                </FixedSizeListWithCustomScroll>
              </div>
            )}
          </>
        );
      }}
    </Popover>
  );
});

const Expander = styled(Icons.Expander)`
  ${tw`text-monochrome-black`}
`;

const InputWrapper = styled.div<{ disabled?: boolean; isActive: boolean; }>`
  ${tw`py-2 px-4 cursor-pointer`}
  ${tw`box-border border border-monochrome-dark-tint rounded bg-monochrome-white hover:border-monochrome-gray`}
  ${({ disabled }) => disabled && tw`bg-monochrome-dark100 hover:border-monochrome-dark100 pointer-events-none`}
  ${({ isActive }) => isActive && tw`border-monochrome-black`}
`;

const FixedSizeListWithCustomScroll = styled(FixedSizeList)`
  ${tw`w-full max-h-[196px] overflow-auto`};

  &::-webkit-scrollbar {
    ${tw`rounded bg-monochrome-white`}
  }
;

  &::-webkit-scrollbar-thumb {
    ${tw`w-1 rounded bg-monochrome-dark-tint rounded-full border-4 border-solid border-monochrome-white`}
  }
;
`;

const Option = styled.div<{ selected: boolean }>`
  ${tw`px-4 py-1 cursor-pointer`}
  ${tw`text-monochrome-black text-14 leading-20 whitespace-nowrap hover:bg-monochrome-white/10`}
  ${({ selected }) => selected && tw`text-blue-default`}
`;

function getFixedSizeListWithCustomScrollHeight(itemsCount: number) {
  return itemsCount * LIST_ITEM_HEIGHT > MAX_LIST_CONTAINER_HEIGHT ? MAX_LIST_CONTAINER_HEIGHT : itemsCount * LIST_ITEM_HEIGHT;
}

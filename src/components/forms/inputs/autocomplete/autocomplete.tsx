import React, {
  memo, useCallback, useMemo, useState,
} from 'react';
import tw, { styled } from 'twin.macro';

import { Expander, InputWrapper, FixedSizeListWithCustomScroll } from './elements';
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

  const [selectedValue, setSelectedValue] = useState<string | undefined>(defaultValue); // TODO save OptionType here
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
        }, [filteredOptions, selectedValue]);

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
                <SearchInput
                  tw="relative mx-4 mb-4"
                  placeholder="Search..."
                  isOpen
                  onChange={({ target: { value } }) => setFilterValue(value)}
                  reset={() => setFilterValue('')}
                  value={filterValue}
                />
                <FixedSizeListWithCustomScroll
                  width="auto"
                  height={getFixedSizeListWithCustomScrollHeight(filteredOptions.length)}
                  itemSize={LIST_ITEM_HEIGHT}
                  itemCount={filteredOptions.length}
                >
                  {renderOptions}
                </FixedSizeListWithCustomScroll>
                {filteredOptions.length === 0 && (
                  <div tw="py-6 text-center text-monochrome-dark-tint text-14 leading-20">
                    No results found.
                  </div>
                )}
              </div>
            )}
          </>
        );
      }}
    </Popover>
  );
});

const Option = styled.div<{ selected: boolean }>`
  ${tw`px-4 py-1 cursor-pointer`}
  ${tw`text-monochrome-black text-14 leading-20 whitespace-nowrap hover:bg-monochrome-white/10`}
  ${({ selected }) => selected && tw`text-blue-default`}
`;

function getFixedSizeListWithCustomScrollHeight(itemsCount: number) {
  return itemsCount * LIST_ITEM_HEIGHT > MAX_LIST_CONTAINER_HEIGHT ? MAX_LIST_CONTAINER_HEIGHT : itemsCount * LIST_ITEM_HEIGHT;
}

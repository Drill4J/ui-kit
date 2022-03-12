import React, {
  memo, useCallback, useMemo, useState,
} from 'react';
import 'twin.macro';

import {
  Expander, InputWrapper, FixedSizeListWithCustomScroll, Option, AutocompleteBodyWrapper,
} from '../elements';
import { Popover } from '../../../../popover';
import { Icons } from '../../../../icon';
import { SearchInput } from '../../search-input';

interface OptionType {
  value: string;
  label: string;
}

interface Props {
  options: OptionType[];
  onChange: (value: string) => void;
  placeholder: string;
  defaultValue?: string;
  disabled?: boolean;
}
const LIST_ITEM_HEIGHT = 28;
const MAX_LIST_CONTAINER_HEIGHT = 196; // 7 * LIST_ITEM_HEIGHT
export const Autocomplete = memo(({
  options, onChange, placeholder, defaultValue, disabled,
}: Props) => {
  const [filterValue, setFilterValue] = useState('');
  const filteredOptions = useMemo(() => options.filter((option) => option.value.includes(filterValue)), [options, filterValue]);

  const [selectedValue, setSelectedValue] = useState<string | null>(defaultValue || null);
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
                onChange(value);
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
              tw="flex justify-between items-center gap-x-1 cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              isActive={isOpen}
              disabled={disabled}
            >
              {selectedValue
                ? <span tw="text-monochrome-black" data-test="autocomplete:selected-value">{selectedOption?.label}</span>
                : <span tw="text-monochrome-dark-tint">{placeholder}</span>}
              <div tw="flex gap-x-3">
                {selectedValue && <Icons.Close width={12} height={12} onClick={() => setSelectedValue(null)} />}
                <Expander width={12} height={12} rotate={isOpen ? -90 : 90} />
              </div>
            </InputWrapper>
            {isOpen && (
              <AutocompleteBodyWrapper>
                <AutocompleteBody
                  setFilterValue={setFilterValue}
                  renderOptions={renderOptions}
                  filterValue={filterValue}
                  filteredOptionsCount={filteredOptions.length}
                />
              </AutocompleteBodyWrapper>
            )}
          </>
        );
      }}
    </Popover>
  );
});

interface AutocompleteBodyProps {
  filterValue: string;
  setFilterValue: (filter: string) => void;
  renderOptions: ({ index, style }: any) => JSX.Element;
  filteredOptionsCount: number;
}

export const AutocompleteBody = ({
  filterValue, setFilterValue, renderOptions, filteredOptionsCount,
}: AutocompleteBodyProps) => (
  <>
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
      height={getFixedSizeListWithCustomScrollHeight(filteredOptionsCount)}
      itemSize={LIST_ITEM_HEIGHT}
      itemCount={filteredOptionsCount}
    >
      {renderOptions}
    </FixedSizeListWithCustomScroll>
    {filteredOptionsCount === 0 && (
      <div tw="py-6 text-center text-monochrome-dark-tint text-14 leading-20">
        No results found.
      </div>
    )}
  </>
);

function getFixedSizeListWithCustomScrollHeight(itemsCount: number) {
  return itemsCount * LIST_ITEM_HEIGHT > MAX_LIST_CONTAINER_HEIGHT ? MAX_LIST_CONTAINER_HEIGHT : itemsCount * LIST_ITEM_HEIGHT;
}

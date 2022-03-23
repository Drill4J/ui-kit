import React, { memo, useCallback } from 'react';
import 'twin.macro';

import { Select } from '../select';
import { OptionType } from '../../../../../types/option';
import { Icons } from '../../../../icon';

interface Props {
  options: OptionType[];
  onChange: (value: string | null, option?: OptionType) => void;
  onClear?: () => void;
  placeholder: string;
  defaultValue?: string;
  disabled?: boolean;
  className?: string;
}
const LIST_ITEM_HEIGHT = 28;
const MAX_LIST_CONTAINER_HEIGHT = 196; // 7 * LIST_ITEM_HEIGHT

export const Autocomplete = memo(({
  options: propsOptions, onChange, placeholder, defaultValue, disabled, className, onClear,
}: Props) => (
  <Select
    options={propsOptions}
    defaultValue={defaultValue}
    className={className}
  >
    {({
      options, selectedOption, isOpen, selectValue, setIsOpen,
    }) => {
      const renderOptions = useCallback(({ index, style }) => {
        const option = options[index];
        const { value, label }: OptionType = option;
        return (
          <Select.Option
            data-test="autocomplete:option"
            style={style}
            selected={value === selectedOption?.value}
            onClick={() => {
              onChange(value, option);
              selectValue(value);
              setIsOpen(false);
            }}
            key={value}
            title={label}
          >
            {label}
          </Select.Option>
        );
      }, [options, selectedOption]);

      return (
        <>
          <Select.Input disabled={disabled}>
            <div tw="flex justify-between items-center flex-grow">
              {selectedOption
                ? <Select.SelectedValue>{selectedOption.label}</Select.SelectedValue>
                : <Select.Placeholder>{placeholder}</Select.Placeholder>}
              {selectedOption && (
                <Icons.Close
                  width={12}
                  height={12}
                  onClick={(e) => {
                    e.stopPropagation();
                    selectValue('');
                    onClear && onClear();
                  }}
                />
              )}
            </div>
          </Select.Input>
          {isOpen && (
            <Select.Body>
              <Select.Search />
              <Select.FixedSizeListWithCustomScroll
                width="auto"
                height={getFixedSizeListWithCustomScrollHeight(options.length)}
                itemSize={LIST_ITEM_HEIGHT}
                itemCount={options.length}
              >
                {renderOptions}
              </Select.FixedSizeListWithCustomScroll>
              {options.length === 0 && (
                <div tw="py-6 text-center text-monochrome-dark-tint text-14 leading-20">
                  No results found.
                </div>
              )}
            </Select.Body>
          )}
        </>
      );
    }}
  </Select>
));

function getFixedSizeListWithCustomScrollHeight(itemsCount: number) {
  return itemsCount * LIST_ITEM_HEIGHT > MAX_LIST_CONTAINER_HEIGHT ? MAX_LIST_CONTAINER_HEIGHT : itemsCount * LIST_ITEM_HEIGHT;
}

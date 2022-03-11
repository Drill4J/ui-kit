import React, {
  memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import tw, { styled } from 'twin.macro';

import {
  Expander, InputWrapper, AutocompleteBodyWrapper, Option,
} from '../elements';
import { Popover } from '../../../../popover';
import { Checkbox } from '../../checkbox';
import { AutocompleteBody } from './autocomplete';
import { MultiSelectCheckbox } from '../../checkbox/multi-select-checkbox';
import { Button } from '../../button';

interface OptionType {
  value: string;
  label: string;
}

interface Props {
  options: OptionType[];
  onSelect: (value: Record<string, boolean>) => void;
  placeholder: string;
  values: Record<string, boolean>;
  disabled?: boolean;
}

export const MultipleSelectAutocomplete = memo(({
  options, onSelect, placeholder, values, disabled,
}: Props) => {
  const [filterValue, setFilterValue] = useState('');
  const filteredOptions = useMemo(() => options.filter((option) => option.value.includes(filterValue)), [options, filterValue]);

  const [selectedOptions, setSelectedOptions] = useState<Record<string, boolean>>(values); // TODO save OptionType here
  const selectedOptionsCount = useMemo(() => Object.keys(selectedOptions)
    .filter((option) => selectedOptions[option]).length, [selectedOptions]);
  const isSelectedAllOptions = selectedOptionsCount === options.length;

  useEffect(() => {
    setSelectedOptions(values);
  }, [values]);

  const appliedOptionsLabels = useMemo(() => Object.keys(values).filter((option) => values[option]), [values]);
  const pristine = useMemo(() =>
    Object.keys({ ...values, ...selectedOptions })
      .every((option) => values[option] === selectedOptions[option]), [values, selectedOptions]);

  return (
    <Popover>
      {({ setIsOpen, isOpen }) => {
        const renderOptions = useCallback(({ index, style }) => {
          const { value, label } : OptionType = filteredOptions[index];
          return (
            <Option
              tw="flex gap-x-2 items-center"
              data-test="autocomplete:option"
              style={style}
              key={value}
              onClick={() => {
                setSelectedOptions({
                  ...selectedOptions,
                  [value]: !selectedOptions[value],
                });
              }}
            >
              <Checkbox
                tw="text-blue-default"
                id={value}
                checked={selectedOptions[value]}
              />
              <label htmlFor={value} tw="cursor-pointer">
                {label}
              </label>
            </Option>
          );
        }, [filteredOptions, selectedOptions]);

        return (
          <>
            <InputWrapper
              tw="flex justify-between items-center gap-x-1 cursor-pointer"
              isActive={isOpen}
              disabled={disabled}
              onClick={() => setIsOpen(!isOpen)}
            >
              {appliedOptionsLabels.length
                ? (
                  <span tw="text-monochrome-black" data-test="autocomplete:selected-value">
                    {appliedOptionsLabels.length > 3
                      ? `${appliedOptionsLabels.length} of ${options.length} selected`
                      : appliedOptionsLabels.join(', ')}
                  </span>
                )
                : <span tw="text-monochrome-dark-tint">{placeholder}</span>}
              <Expander width={12} height={12} rotate={isOpen ? -90 : 90} />
            </InputWrapper>
            {isOpen && (
              <AutocompleteBodyWrapper>
                <Option
                  data-test="autocomplete:select-all-values-option"
                  tw="flex gap-x-2 items-center mb-4"
                >
                  <MultiSelectCheckbox
                    tw="text-blue-default"
                    id="all-values"
                    allSelected={isSelectedAllOptions}
                    partiallySelected={Boolean(selectedOptionsCount) && !isSelectedAllOptions}
                    onChange={() => (isSelectedAllOptions
                      ? setSelectedOptions({})
                      : setSelectedOptions(options.reduce((acc, option) => ({ ...acc, [option.value]: true }), {})))}
                  />
                  <label htmlFor="all-values" tw="cursor-pointer">All values</label>
                </Option>
                <AutocompleteBody
                  setFilterValue={setFilterValue}
                  renderOptions={renderOptions}
                  filterValue={filterValue}
                  filteredOptionsCount={filteredOptions.length}
                />
                <Footer>
                  <span>{selectedOptionsCount} of {options.length} selected</span>
                  <Button
                    type="button"
                    size="small"
                    primary
                    disabled={pristine}
                    onClick={() => {
                      onSelect(selectedOptions);
                      setIsOpen(false);
                    }}
                  >
                    Apply
                  </Button>
                </Footer>
              </AutocompleteBodyWrapper>
            )}
          </>
        );
      }}
    </Popover>
  );
});

const Footer = styled.div`
  ${tw`flex justify-between items-center pt-4 px-4 pb-2 border-t border-monochrome-medium-tint text-monochrome-default text-14 leading-20`}
`;

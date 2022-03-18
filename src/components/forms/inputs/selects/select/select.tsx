import React, {
  createContext, useContext, useEffect, useMemo, useState,
} from 'react';
import tw, { styled } from 'twin.macro';

import { Popover } from '../../../../popover';
import {
  Expander,
} from '../elements';
import { SearchInput } from '../../search-input';

interface OptionType {
  value: string;
  label: string;
  [key: string]: string;
}

interface Props {
  options: OptionType[];
  defaultValue?: string;
  className?: string;
  children: Children
}

type State = {
  isOpen: boolean;
  selectedOption?: OptionType;
  options: OptionType[];
  setIsOpen: (value: boolean) => void;
  selectValue: (value: string) => void;
  filterValue: string;
  setFilterValue: (value: string) => void;
};

type Children = React.ReactChild | React.ReactChild[] | React.FC<State>;
const defaultContextState: State = {
  isOpen: false, setIsOpen: () => {}, options: [], selectValue: () => {}, setFilterValue: () => {}, filterValue: '',
};

const SelectContext = createContext<State>(defaultContextState);

export const Select = ({
  options, defaultValue, className, children,
}: Props) => {
  const [filterValue, setFilterValue] = useState('');
  const filteredOptions = useMemo(() => options.filter((option) => option.label.includes(filterValue)), [options, filterValue]);

  const [selectedValue, selectValue] = useState<string | null>(defaultValue || null);
  const selectedOption = useMemo(() => options.find(({ value }) => selectedValue === value), [selectedValue, options]);

  return (
    <Popover className={className}>
      {({ setIsOpen, isOpen }) => (
        <SelectContext.Provider value={{
          setIsOpen, isOpen, selectedOption, options: filteredOptions, selectValue, setFilterValue, filterValue,
        }}
        >
          {typeof children === 'function' ? children({
            setIsOpen, isOpen, selectedOption, options: filteredOptions, selectValue, setFilterValue, filterValue,
          }) : children}
        </SelectContext.Provider>
      )}
    </Popover>
  );
};

interface InputProps {
  disabled?: boolean;
  isActive?: boolean;
}

const InputWrapper = styled.div<InputProps>`
  ${tw`flex justify-between items-center gap-x-1 cursor-pointer py-2 px-4 h-10`}
  ${tw`box-border border border-monochrome-dark-tint rounded bg-monochrome-white hover:border-monochrome-gray`}
  ${({ disabled }) => disabled && tw`bg-monochrome-dark100 hover:border-monochrome-dark100 pointer-events-none`}
  ${({ isActive }) => isActive && tw`border-monochrome-black`}
`;

const Input: React.FC<InputProps> = ({ children, ...rest }) => {
  const { setIsOpen, isOpen } = useContext(SelectContext);
  return (
    <InputWrapper isActive={isOpen} {...rest} onClick={() => setIsOpen(!isOpen)}>
      {children}
      <Expander width={12} height={12} rotate={isOpen ? -90 : 90} />
    </InputWrapper>
  );
};

const Search: React.FC = (props) => {
  const { filterValue, setFilterValue } = useContext(SelectContext);

  return (
    <SearchInput
      tw="relative mx-4 mb-4"
      placeholder="Search..."
      isOpen
      onChange={({ target: { value } }) => setFilterValue(value)}
      reset={() => setFilterValue('')}
      value={filterValue}
      {...props}
    />
  );
};

const Placeholder = styled.span`
  ${tw`text-monochrome-dark-tint`}
`;

const SelectedValue = styled.span`
  ${tw`text-monochrome-black truncate`}
`;

const Option = styled.div<{ selected?: boolean }>`
  ${tw`px-4 py-1 cursor-pointer truncate`}
  ${tw`text-monochrome-black text-14 leading-20 whitespace-nowrap`}
  ${({ selected }) => selected && tw`text-blue-default`}
`;

const ContainerWithSScroll = styled.div`
  ${tw`w-full max-h-[196px] overflow-auto`};

  &::-webkit-scrollbar {
    ${tw`rounded bg-monochrome-white`}
  };

  &::-webkit-scrollbar-thumb {
    ${tw`w-1 rounded bg-monochrome-dark-tint rounded-full border-[6px] border-solid border-monochrome-white`}
  };
`;

export const Body = styled.div`
  ${tw`absolute z-50 top-11 py-2 w-full rounded bg-monochrome-white`}
  box-shadow: 0px 8px 40px rgba(132, 146, 160, 0.2);
`;

Select.InputWrapper = InputWrapper;
Select.Input = Input;
Select.Placeholder = Placeholder;
Select.SelectedValue = SelectedValue;
Select.Option = Option;
Select.ContainerWithSScroll = ContainerWithSScroll;
Select.Body = Body;
Select.Search = Search;

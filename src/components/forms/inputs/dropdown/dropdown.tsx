import { useState } from 'react';
import tw, { styled } from 'twin.macro';

import { Icons } from '../../../../components/icon';
import { useClickOutside } from '../../../../hooks';
import { DropdownProps } from './dropdown-types';

export const Dropdown = ({ items, value, onChange }: DropdownProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const node = useClickOutside(() => setIsExpanded(false));
  const selectedValue = items.find((item) => value === item.value);

  return (
    <div tw="relative" ref={node}>
      <div tw="flex items-center cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div tw="text-14 font-bold leading-24 text-blue-default">{selectedValue && selectedValue.label}</div>
        <div tw="text-blue-default ml-2 rotate-90">
          <Icons.Expander width={8} height={8} rotate={isExpanded ? 180 : 0} />
        </div>
      </div>
      {isExpanded && (
        <div tw="absolute top-8 z-50">
          <ItemsList>
            {items.map((item) => (
              <Item
                onClick={() => {
                  onChange(item);
                  setIsExpanded(false);
                }}
                key={item.value}
              >
                <div tw="flex items-center w-6 text-blue-default">{value === item.value && <Icons.Check />}</div>
                {item.label}
              </Item>
            ))}
          </ItemsList>
        </div>
      )}
    </div>
  );
};

const ItemsList = styled.div`
  ${tw`flex flex-col overflow-y-auto bg-monochrome-white shadow`};
  width: 306px;
  max-height: 345px;
`;

const Item = styled.div`
  ${tw`flex flex-row items-center text-14 leading-32 pl-2 text-monochrome-black cursor-pointer`}

  &:hover {
    background-color: rgba(104, 116, 129, 0.05);
  }
`

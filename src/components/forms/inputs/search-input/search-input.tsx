import { useState, useRef, useEffect } from 'react';
import tw, { styled } from 'twin.macro';

import { InputProps } from '../input-types';
import { Icons } from '../../../icon';

export const SearchInput = ({
  className,
  reset,
  ...restProps
}: InputProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const node = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (node && node.current && isOpen) {
      node.current.focus();
    }
  }, [isOpen]);

  return (
    <div tw="w-full relative">
      <div tw="flex items-center" className={className}>
        <SearchIcon onClick={() => setIsOpen(!isOpen)} isActive={isOpen || restProps?.value} />
        {isOpen && <Input {...restProps} ref={node} />}
        {isOpen && restProps?.value && (
          <ClearIcon width={8} height={8} onClick={reset} data-testid="search-input:clear-icon" />
        )}
      </div>
    </div>
  );
};

const Input: React.ElementType = styled.input`
  ${tw`
    w-full h-6 px-6 
    appearance-none outline-none 
    border-b border-transparent
    text-14 leading-20 font-regular text-monochrome-black
    placeholder-monochrome-default
    focus:(border-monochrome-medium-tint)
  `};
`;

const SearchIcon = styled(Icons.Search)`
  ${tw`
    absolute
    text-monochrome-default
    hover:text-blue-medium-tint 
    active:text-blue-shade
    cursor-pointer
  `}

  ${({ isActive }: { isActive: boolean}) => isActive && tw`text-blue-default`}
`;

const ClearIcon = styled(Icons.Close)`
  ${tw`absolute text-red-default cursor-pointer right-0`}
`;

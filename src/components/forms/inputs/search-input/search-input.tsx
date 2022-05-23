import { useState, useRef, useEffect } from 'react';
import tw, { styled } from 'twin.macro';

import { InputProps } from '../input-types';
import { Icons } from '../../../icon';

export const SearchInput = ({
  className,
  reset,
  isOpen: isDefaultOpen,
  isResetOnIcon,
  ...restProps
}: { isOpen?: boolean, isResetOnIcon?: boolean } & InputProps) => {
  const [isOpen, setIsOpen] = useState(Boolean(restProps.value || isDefaultOpen));
  const node = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (node && node.current && isOpen) {
      node.current.focus();
    }
  }, [isOpen]);

  const iconHandler = isResetOnIcon ? reset : () => setIsOpen(!isOpen);

  return (
    <div tw="w-full relative">
      <div tw="flex h-6 items-center" className={className}>
        <SearchIcon
          onClick={iconHandler}
          active={isOpen || restProps?.value}
          data-test="search-input:enable-input"
        />
        {isOpen && <Input {...restProps} ref={node} />}
        {isOpen && restProps?.value && (
          <ClearIcon width={8} height={8} onClick={reset} data-test="search-input:clear-icon" />
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

  ${({ active }: { active: boolean}) => active && tw`text-blue-default`}
`;

const ClearIcon = styled(Icons.Close)`
  ${tw`absolute text-monochrome-black cursor-pointer right-[6px]`}
`;

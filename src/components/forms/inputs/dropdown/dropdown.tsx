import { useLayoutEffect, useRef, useState } from 'react';
import tw, { styled } from 'twin.macro';

import { Icons } from '../../../icon/index';
import { useClickOutside } from '../../../../hooks';

type Position = 'top' | 'bottom';
type Value = string | number;

interface Item {
  value: Value;
  label: React.ReactNode;
}

interface Props {
  items: Item[];
  action: (value: Value) => void;
  selectedValue: Value;
}

export const Dropdown = ({
  items, action, selectedValue,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<Position>('bottom');
  const node = useClickOutside(() => setIsOpen(false));
  const dropdownRef = useRef<HTMLDivElement>(null);
  const labelNode = useRef<HTMLDivElement>(null);

  const itemHeight = 32;
  const dropdownHeight = itemHeight * items.length;
  const { top: menuTopPosition = 0 } = node?.current?.getBoundingClientRect() || {};
  const { height: dropdownLabelHeight = 0 } = labelNode?.current?.getBoundingClientRect() || {};
  const listMargin = 4;

  useLayoutEffect(() => {
    menuTopPosition && menuTopPosition + dropdownLabelHeight + dropdownHeight < document.documentElement.clientHeight
      ? setPosition('bottom') : setPosition('top');

    const observer = new IntersectionObserver(
      ([entry]) => {
        !entry.isIntersecting && setPosition('top');
      },
      {
        root: null,
        threshold: 1.0,
      },
    );
    dropdownRef.current && observer.observe(dropdownRef.current);
  }, [isOpen]);

  return (
    <div ref={node} tw="relative flex items-center gap-x-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
      <span ref={labelNode} tw="text-14 leading-20 font-bold" data-test="dropdown:selected-value">
        {selectedValue}
      </span>
      <Icons.Expander width={8} height={8} rotate={isOpen ? -90 : 90} />
      {isOpen && (
        <ScrollContainer
          ref={dropdownRef}
          style={{
            top: position === 'bottom' ? `${dropdownLabelHeight + listMargin}px` : `-${dropdownHeight + listMargin}px`,
          }}
        >
          {items.map(({ label, value }) => (
            <div
              tw="flex items-center pl-2 pr-8 text-14 leading-32 hover:bg-monochrome-light-tint"
              data-test="dropdown:item"
              onClick={(() => action(value))}
              key={value}
            >
              {selectedValue === value && <Icons.Check width={14} height={10} viewBox="0 0 14 10" tw="absolute text-blue-default" />}
              <span tw="ml-6">{label}</span>
            </div>
          ))}
        </ScrollContainer>
      )}
    </div>
  );
};

const ScrollContainer = styled.div`
  ${tw`overflow-auto absolute shadow bg-monochrome-white max-h-56`};
    &::-webkit-scrollbar {
      ${tw`w-1 rounded bg-monochrome-light-tint`}
    };

    &::-webkit-scrollbar-thumb {
      ${tw`w-1 rounded bg-monochrome-medium-tint`}
    };
`;

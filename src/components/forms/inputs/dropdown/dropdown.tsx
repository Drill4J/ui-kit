import { useRef } from 'react';
import tw, { styled } from 'twin.macro';

import { Icons } from '../../../icon/index';
import { Popover } from '../../../popover';
import { useIntersectionSide } from '../../../../hooks';

type Value = string | number;

interface Item {
  value: Value;
  label: React.ReactNode;
}

interface Props {
  items: Item[];
  onChange: (value: Value) => void;
  value: Value;
}
// TODo remove this component
export const Dropdown = ({
  items, onChange, value,
}: Props) => {
  const labelNode = useRef<HTMLDivElement>(null);
  const itemHeight = 32;
  const dropdownHeight = itemHeight * items.length;
  const listMargin = 4;
  const selectedValue = items.find((item) => value === item.value);

  return (
    <Popover>
      {({ setIsOpen, isOpen }) => {
        const { ref, intersectionSide } = useIntersectionSide({ dependency: [isOpen] });
        const { height: dropdownLabelHeight = 0 } = labelNode?.current?.getBoundingClientRect() || {};

        return (
          <>
            <div tw="flex items-center gap-x-1 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
              <span ref={labelNode} data-test="dropdown:selected-value">
                {selectedValue && selectedValue.label}
              </span>
              <Icons.Expander width={8} height={8} rotate={isOpen ? -90 : 90} />
              {isOpen && (
                <ScrollContainer
                  ref={ref}
                  style={{
                    top: intersectionSide === 'bottom' ? `-${dropdownHeight + listMargin}px` : `${dropdownLabelHeight + listMargin}px`,
                  }}
                >
                  {items.map(({ label, value: itemValue }) => (
                    <div
                      tw="flex items-center pl-2 pr-8 text-monochrome-black text-14 leading-32 hover:bg-monochrome-light-tint"
                      data-test="dropdown:item"
                      onClick={(() => onChange(itemValue))}
                      key={value}
                    >
                      {itemValue === value && <Icons.Check width={14} height={10} viewBox="0 0 14 10" tw="absolute text-blue-default" />}
                      <span tw="ml-6 whitespace-nowrap font-regular">{label}</span>
                    </div>
                  ))}
                </ScrollContainer>
              )}
            </div>
          </>
        );
      }}
    </Popover>
  );
};

const ScrollContainer = styled.div`
  ${tw`overflow-auto absolute shadow bg-monochrome-white max-h-56 z-50`};
    &::-webkit-scrollbar {
      ${tw`w-1 rounded bg-monochrome-light-tint`}
    };

    &::-webkit-scrollbar-thumb {
      ${tw`w-1 rounded bg-monochrome-medium-tint`}
    };
`;

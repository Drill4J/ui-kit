import tw, { styled } from 'twin.macro';

import { spacesToDashes } from '../../utils';
import { Icons } from '../icon';
import { useIntersectionSide } from '../../hooks';
import { Popover } from '../popover';

export interface MenuItemType {
  label: string;
  icon: keyof typeof Icons;
  onClick: () => void;
  Content?: (props: { children: JSX.Element }) => JSX.Element;
  disabled?: boolean;
}

interface Props {
  items: MenuItemType[];
  bordered?: boolean;
  testContext?: string;
  className?: string;
  disabled?: boolean;
}

export const Menu = ({
  items,
  bordered,
  testContext = '',
  className,
  disabled = false,
  ...rest
}: Props) => (
  <Popover tw="text-monochrome-black">
    {({ isOpen, setIsOpen }) => {
      const { ref, intersectionSide } = useIntersectionSide({ dependency: [isOpen] });
      const position = intersectionSide === 'bottom' ? 'top' : 'bottom';

      return (
        <MenuIcon
          className={className}
          onClick={() => !disabled && setIsOpen(!isOpen)}
          data-test={`menu:icon:${testContext}`}
          disabled={disabled}
          {...rest}
        >
          {bordered ? <Icons.MoreOptionsWithBorder /> : <Icons.MoreOptions />}
          {isOpen && (
            <ItemListWrapper
              ref={ref}
              position={position}
            >
              <ItemsList position={intersectionSide === 'bottom' ? 'top' : 'bottom'} data-test={`menu:list:${testContext}`}>
                {items.map(({
                  icon,
                  label,
                  onClick,
                  Content = ({ children }) => children,
                  disabled: disableItem = false,
                  ...restItem
                }) => {
                  const ItemIcon = Icons[icon];
                  const event = !disableItem ? onClick : () => {};
                  return (
                    <Content key={`menu:item:${spacesToDashes(label)}`}>
                      <Item
                        onClick={event}
                        data-test={`menu:item:${spacesToDashes(label)}`}
                        disabled={disableItem}
                        {...restItem}
                      >
                        <ItemIcon width={16} height={16} />
                        <ItemLabel>{label}</ItemLabel>
                      </Item>
                    </Content>
                  );
                })}
              </ItemsList>
            </ItemListWrapper>
          )}
        </MenuIcon>
      );
    }}
  </Popover>
);
const MenuIcon = styled.div<{ disabled: boolean }>(({ disabled }) => [
  tw`relative flex items-center text-blue-default max-h-[32px] max-w-[32px] cursor-not-allowed`,
  !disabled && tw`hover:text-blue-medium-tint active:text-blue-shade cursor-pointer`,
]);

type Position = 'bottom' | 'top'

const ItemListWrapper = styled.div<{ position: Position }>(({ position }) => [
  tw`absolute z-50 right-[calc(50% - 22px)]`,
  position === 'bottom' && tw`top-[calc(100% + 12px)]`,
  position === 'top' && tw`bottom-[calc(100% + 12px)]`,
]);

const ItemsList = styled.div<{ position: Position }>`
  filter: drop-shadow(0 0 24px rgba(0, 0, 0, 0.15));

  ${tw`flex flex-col py-2 px-0 rounded-lg z-50 bg-monochrome-white text-monochrome-black`}
  &::before {
    content: '';
    ${tw`absolute bg-monochrome-white left-[calc(100% - 30px)] w-[15px] h-[15px] transform rotate-45`}
    ${({ position }) => position === 'top' && tw`bottom-[-7px]`}
    ${({ position }) => position === 'bottom' && tw`top-[-7px]`}
  }
`;

const Item = styled.div<{ disabled: boolean }>(({ disabled }) => [
  tw`flex flex-row items-center py-0 px-4 hover:bg-monochrome-light-tint cursor-pointer`,
  disabled && tw`text-monochrome-dark-tint cursor-not-allowed hover:bg-transparent`,
]);

const ItemLabel = styled.span`
  ${tw`text-14 leading-32 ml-2 whitespace-nowrap`};
`;

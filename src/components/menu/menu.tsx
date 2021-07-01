import {
  useLayoutEffect, useRef, useState,
} from 'react';
import { nanoid } from 'nanoid';
import tw, { styled, css } from 'twin.macro';

import { Icons } from '../icon';
import { useClickOutside } from '../../hooks';
import { spacesToDashes } from '@drill4j/common-utils';

interface MenuItemType {
  label: string;
  icon: keyof typeof Icons;
  onClick: () => void;
  Content?: (props: { children: JSX.Element}) => JSX.Element;
}

interface Props {
  items: MenuItemType[];
  bordered?: boolean;
  testContext?: string;
}

const MenuIcon = styled.div`
  max-height: 32px;
  max-width: 32px;
  ${tw`relative flex items-center text-blue-default cursor-pointer
    hover:text-blue-medium-tint
    active:text-blue-shade
  `}
`;

const ItemsList = styled.div<{ position: 'bottom' | 'top' }>`
  filter: drop-shadow(0 0 24px rgba(0, 0, 0, 0.15));
  ${tw`flex flex-col py-2 px-0 rounded-lg z-50 bg-monochrome-white text-monochrome-black`}

  &::before {
    content: '';
    position: absolute;
    background-color: #ffffff;
    left: calc(100% - 30px);
    height: 15px;
    width: 15px;
    transform: rotate(45deg);
  }

  ${({ position }) => position === 'bottom' && css`
    &::before {
      top: -7px;
    }
  `}

  ${({ position }) => position === 'top' && css`
    &::before {
      bottom: -7px;
    }
  `}
  ${({ position }) => css`
    &::before {
      ${position === 'top' ? 'bottom: -7px;' : 'top: -7px;'}
    }
  `}
`;

const Item = styled.div`
  ${tw`flex flex-row items-center py-0 px-4 cursor-pointer
    hover:bg-monochrome-light-tint
  `};
`;

const ItemLabel = styled.span`
  ${tw`text-14 leading-32 ml-2 whitespace-nowrap`};
`;

export const Menu = ({
  items,
  bordered,
  testContext = '',
}: Props) => {
  const [isListOpened, setIsListOpened] = useState(false);
  const [position, setPosition] = useState<'bottom' | 'top'>('bottom');
  const node = useClickOutside(() => setIsListOpened(false));
  const menuRef = useRef<HTMLDivElement>(null);

  const {
    top: iconTopPosition = 0,
  } = node?.current?.getBoundingClientRect() || {};

  useLayoutEffect(() => {
    const menuPadding = 16;
    const triangleHeightAndMargin = 34;
    const menuItemsHeight = items.length * 32;

    if (iconTopPosition &&
      menuItemsHeight + menuPadding + iconTopPosition + triangleHeightAndMargin < document.documentElement.clientHeight) {
      setPosition('bottom');
    } else {
      setPosition('top');
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        !entry.isIntersecting && setPosition('top');
      },
      {
        root: null,
        threshold: 1.0,
      },
    );
    menuRef.current && observer.observe(menuRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isListOpened]);

  return (
    <div tw="text-monochrome-black" ref={node}>
      <MenuIcon
        onClick={() => setIsListOpened(!isListOpened)}
        data-test={`menu:icon:${testContext}`}
      >
        {bordered ? <Icons.MoreOptionsWithBorder /> : <Icons.MoreOptions />}
        {isListOpened && (
          <div
            ref={menuRef}
            style={{
              position: 'absolute',
              zIndex: 30,
              top: position === 'bottom' ? 'calc(100% + 12px)' : undefined,
              bottom: position === 'top' ? 'calc(100% + 12px)' : undefined,
              right: 'calc(50% - 22px)',
            }}
          >
            <ItemsList position={position}>
              {items.map(({
                icon,
                label,
                onClick,
                Content = ({ children }) => children,
              }) => {
                const ItemIcon = Icons[icon];
                return (
                  <Content>
                    <Item
                      onClick={onClick}
                      key={nanoid()}
                      data-test={`menu:item:${spacesToDashes(label)}`}
                    >
                      <ItemIcon width={16} height={16} />
                      <ItemLabel>{label}</ItemLabel>
                    </Item>
                  </Content>
                );
              })}
            </ItemsList>
          </div>
        )}
      </MenuIcon>
    </div>
  );
};

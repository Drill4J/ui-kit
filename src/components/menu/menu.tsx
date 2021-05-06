import {
  useLayoutEffect, useRef, useState,
} from 'react';
import { nanoid } from 'nanoid';
import styled, { css } from 'styled-components';

import { Icons } from '../icon';
import { useClickOutside } from '../../hooks';
import { spacesToDashes } from './spaces-to-dashes';
import { COLORS } from '../../theme';

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

const Wrapper = styled.div`
  color: ${COLORS.MONOCHROME.BLACK};
`;

const MenuIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  max-height: 32px;
  max-width: 32px;
  color: ${COLORS.PRIMARY_BLUE.DEFAULT};
  cursor: pointer;

  &:hover {
    color: ${COLORS.PRIMARY_BLUE.MEDIUM_TINT};
  }

  &:active {
    color: ${COLORS.PRIMARY_BLUE.SHADE};
  }
`;

const ItemsList = styled.div<{ position: 'bottom' | 'top' }>`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  filter: drop-shadow(0 0 24px rgba(0, 0, 0, 0.15));
  border-radius: 8px;
  background-color: ${COLORS.MONOCHROME.WHITE};
  color: ${COLORS.MONOCHROME.BLACK};
  z-index: 50;

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
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  cursor: pointer;

  &:hover {
    background-color: ${COLORS.MONOCHROME.LIGHT_TINT};
  }
`;

const ItemLabel = styled.span`
  font-size: 14px;
  line-height: 32px;
  margin-left: 8px;
  white-space: nowrap;
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
    <Wrapper ref={node}>
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
    </Wrapper>
  );
};

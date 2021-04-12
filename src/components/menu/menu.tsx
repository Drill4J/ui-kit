import {
  useLayoutEffect, useRef, useState,
} from 'react';
import { BEM, div } from '@redneckz/react-bem-helper';
import { nanoid } from 'nanoid';

import { Icons } from '../icon';
import { useClickOutside } from '../../hooks';
import { spacesToDashes } from './spaces-to-dashes';

import styles from './menu.module.scss';

interface MenuItemType {
  label: string;
  icon: keyof typeof Icons;
  onClick: () => void;
  content?: React.ReactNode;
}

interface Props {
  className?: string;
  items: MenuItemType[];
  bordered?: boolean;
  testContext?: string;
}

const menu = BEM(styles);

export const Menu = menu(({
  className, items, bordered, testContext = '',
}: Props) => {
  const [isListOpened, setIsListOpened] = useState(false);
  const [position, setPosition] = useState<'bottom' | 'top'>('bottom');
  const node = useClickOutside(() => setIsListOpened(false));
  const menuRef = useRef<HTMLDivElement>(null);
  const menuPadding = 16;
  const triangleHeightAndMargin = 34;
  const menuItemsHeight = items.length * 32;

  const {
    top: iconTopPosition = 0,
  } = node?.current?.getBoundingClientRect() || {};

  useLayoutEffect(() => {
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
    <div className={className} ref={node}>
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
                icon, label, onClick, content,
              }) => {
                const ItemIcon = Icons[icon];
                return (
                  <Item
                    onClick={onClick}
                    key={nanoid()}
                    data-test={`menu:item:${spacesToDashes(label)}`}
                  >
                    <ItemIcon width={16} height={16} />
                    <ItemLabel>{content || label}</ItemLabel>
                  </Item>
                );
              })}
            </ItemsList>
          </div>
        )}
      </MenuIcon>
    </div>
  );
});

const MenuIcon = menu.menuIcon(
  div({ onClick: () => {}, 'data-test': '' } as { onClick?: () => void; 'data-test'?: string }),
);
const ItemsList = menu.itemsList(div({} as { position?: 'bottom' | 'top' }));
const Item = menu.item('div');
const ItemLabel = menu.itemLabel('span');

import * as React from 'react';
import { BEM, div } from '@redneckz/react-bem-helper';

import { Icons } from 'components';
import { useClickOutside } from 'hooks';
import { DropdownItem } from './dropdown-item';

import { DropdownInputProps } from './dropdown-input-types';

import styles from './dropdown-input.module.scss';

const dropdownInput = BEM(styles);

export const DropdownInput = dropdownInput(
  ({
    className, options, value, onChange, error,
  }: DropdownInputProps) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const node = useClickOutside(() => setIsExpanded(false));
    return (
      <div className={className} ref={node}>
        <Container onClick={() => setIsExpanded(!isExpanded)}>
          <ValueInput expanded={isExpanded} error={error}>
            {value && (value.label || value.value)}
          </ValueInput>
          <Icon>
            <Icons.Expander />
          </Icon>
        </Container>
        {isExpanded && (
          <ItemsListWrapper>
            <ItemsList>
              {options.map((option) => (
                <Item
                  onClick={() => {
                    onChange(option);
                    setIsExpanded(false);
                  }}
                  selected={value && value.value === option.value}
                  key={option.value}
                >
                  {value && value.value === option.value && <SelectedItemIcon />}
                  {option.label || option.value}
                </Item>
              ))}
            </ItemsList>
          </ItemsListWrapper>
        )}
      </div>
    );
  },
);

const Container = dropdownInput.container('div');
const ValueInput = dropdownInput.valueInput(div({} as { expanded: boolean; error?: boolean }));
const Icon = dropdownInput.icon('div');
const ItemsListWrapper = dropdownInput.itemListWrapper('div');
const ItemsList = dropdownInput.itemsList('div');
const Item = dropdownInput.item(
  div({ onClick: () => {} } as { selected?: boolean; onClick: (arg: DropdownItem) => void }),
);
const SelectedItemIcon = dropdownInput.selectedItemIcon(Icons.Check);

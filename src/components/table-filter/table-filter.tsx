import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';
import { nanoid } from 'nanoid';

import { Checkbox } from '../../forms/inputs/checkbox';
import { useClickOutside } from '../../hooks';
import {
  useFilter, toggleFilter, toggleAll, setIsExpanded,
} from './use-filter';

import styles from './table-filter.module.scss';

interface Props {
  className?: string;
  filters: string[];
}

const tableFilter = BEM(styles);

export const TableFilter = tableFilter(({ className, filters }: Props) => {
  const {
    isExpanded, filterItems, selectedFilterItems, dispatch,
  } = useFilter(filters);
  const node = useClickOutside(() => dispatch(setIsExpanded(false)));

  return (
    <div className={className} ref={node}>
      <div onClick={() => dispatch(setIsExpanded(!isExpanded))}>
        {selectedFilterItems.length > 0 && selectedFilterItems.length < filters.length ? selectedFilterItems.map(({ name }) => (
          <SelectedItems key={name}>
            {name}
          </SelectedItems>
        )) : <SelectedItems>All</SelectedItems>}
      </div>
      {isExpanded && (
        <ItemsListWrapper>
          <ItemsList>
            <Item key={nanoid()}>
              <Checkbox
                label="All"
                checked={selectedFilterItems.length === filters.length}
                onChange={({ target: { checked } }) => dispatch(toggleAll(checked))}
              />
            </Item>
            {filterItems.map(({ name, checked }) => (
              <Item key={nanoid()}>
                <Checkbox
                  checked={checked}
                  label={name}
                  onChange={() => dispatch(toggleFilter(name))}
                />
              </Item>
            ))}
          </ItemsList>
        </ItemsListWrapper>
      )}
    </div>
  );
});

const SelectedItems = tableFilter.selectedItems('span');
const ItemsListWrapper = tableFilter.itemListWrapper('div');
const ItemsList = tableFilter.itemsList('div');
const Item = tableFilter.item('div');

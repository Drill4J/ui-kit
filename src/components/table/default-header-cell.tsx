import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { useHover } from '../../hooks';
import { SortArrow } from '../sort-arrow';
import { ColumnProps, Sort, Order } from './table-types';

import styles from './default-header-cell.module.scss';

interface Props {
  className?: string;
  column: ColumnProps;
  sort?: Sort;
  onSort?: (sort: Sort) => void;
}

const defaultHeaderCell = BEM(styles);

export const DefaultHeaderCell = defaultHeaderCell(({
  className, column: { name, label = '' }, sort, onSort,
}: Props) => {
  const { ref, isVisible } = useHover();
  return (
    <div ref={ref}>
      {onSort && sort ? (
        <div className={className} onClick={() => onSort({ order: invertOrder(sort.order), fieldName: name })}>
          {(isVisible || name === sort.fieldName) &&
          <SortArrow active={name === sort.fieldName} order={name === sort.fieldName ? sort.order : null} />}
          {label}
        </div>
      ) : label}
    </div>
  );
});

function invertOrder(order: Order) {
  return order === 'ASC' ? 'DESC' : 'ASC';
}

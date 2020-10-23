import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { SortArrows } from '../sort-arrows';
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
}: Props) => (
  <>
    {onSort && sort ? (
      <div className={className} onClick={() => onSort({ order: invertOrder(sort.order), fieldName: name })}>
        <SortArrows order={name === sort.fieldName ? sort.order : null} />
        {label}
      </div>
    ) : label}
  </>
));

function invertOrder(order: Order) {
  return order === 'ASC' ? 'DESC' : 'ASC';
}

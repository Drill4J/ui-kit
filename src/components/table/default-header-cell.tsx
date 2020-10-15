import * as React from 'react';

import { Panel } from '../../layouts';
import { SortArrows } from '../sort-arrows';
import { ColumnProps, Sort } from './table-types';

interface Props {
  column: ColumnProps;
  sort: Sort;
  onSort: (sort: Sort) => void;
}

export const DefaultHeaderCell = ({ column: { name, label }, sort, onSort }: Props) => (
  <Panel onClick={() => onSort({ order: invertOrder(sort.order), fieldName: name })}>
    {name !== 'selector' && <SortArrows order={name === sort.fieldName ? sort.order : null} /> }
    {label}
  </Panel>
);

function invertOrder(order: 'ASC' | 'DESC') {
  return order === 'ASC' ? 'DESC' : 'ASC';
}

import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { DefaultHeaderCell } from './default-header-cell';
import { ColumnProps, Sort } from './table-types';

import styles from './table.module.scss';

interface Props {
  className?: string;
  columns: ColumnProps[];
  sort: Sort;
  onSort: (sort: Sort) => void;
}

export const TableHeader = BEM(styles).header(({
  columns, className, sort, onSort,
}: Props) => (
  <thead className={className}>
    <tr>
      {columns.map((column) => {
        const { name, width, HeaderCell } = column;
        return (
          <th key={name} style={{ width }}>
            {HeaderCell
              ? HeaderCell({ column })
              : <DefaultHeaderCell column={column} sort={sort} onSort={onSort} />}
          </th>
        );
      })}
    </tr>
  </thead>
));

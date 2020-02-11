import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { get } from './get';
import { DefaultCell } from './default-cell';
// eslint-disable-next-line import/no-cycle
import { ExpandedRowContent } from './expanded-row-content';

import styles from './table.module.scss';

interface Props {
  className?: string;
  item: { [key: string]: unknown };
  columns: any[];
  index: number;
  color?: 'blue' | 'gray' | 'yellow';
  expandedColumns?: any[];
  secondLevelExpand?: any[];
  expandedContentKey?: string;
  expandedRows?: string[];
}

export const TableRow = BEM(styles).row(
  ({
    className,
    item,
    columns,
    index,
    expandedContentKey = '',
    color,
    expandedColumns = [],
    secondLevelExpand = [],
    expandedRows,
  }: Props) => (
    <>
      <tr className={className}>
        {columns.map((column) => {
          const Cell = column.Cell || DefaultCell;
          return (
            <td key={column.name} colSpan={column.colSpan}>
              <Cell value={get(item, column.name)} item={item} rowIndex={index} />
            </td>
          );
        })}
      </tr>
      {color && (
        <ExpandedRowContent
          data={item[expandedContentKey]}
          expandedColumns={expandedColumns}
          secondLevelExpand={secondLevelExpand}
          expandedRows={expandedRows}
        />
      )}
    </>
  ),
);

import { BEM, div } from '@redneckz/react-bem-helper';

import { get } from './get';
import { DefaultCell } from './default-cell';
// eslint-disable-next-line import/no-cycle
import { ExpandedRowContent } from './expanded-row-content';

import styles from './table-row.module.scss';

interface Props {
  className?: string;
  item: { [key: string]: unknown };
  columns: any[];
  index: number;
  color?: 'blue' | 'gray' | 'yellow';
  expandedColumns?: any[];
  expandedContentKey?: string;
  expandedRows?: string[];
  nested?: boolean;
  nestedLast?: boolean;
  gridTemplateColumns: string;
  gridExpandedTemplateColumns?: string;
}

const tableRow = BEM(styles);

export const TableRow = tableRow(
  ({
    className,
    item,
    columns,
    index,
    expandedContentKey = '',
    color,
    expandedColumns = [],
    expandedRows,
    gridTemplateColumns,
    gridExpandedTemplateColumns = '',
  }: Props) => (
    <>
      <div className={className} style={{ display: 'grid', gridTemplateColumns, backgroundColor: color ? '#F8F9FB' : undefined }}>
        {columns.map((column) => {
          const Cell = column.Cell || DefaultCell;
          return (
            <TableRowCell key={column.name} type={column.align || 'end'} selector={column.name === 'selector'}>
              <Cell value={get(item, column.name)} item={item} rowIndex={index} />
            </TableRowCell>
          );
        })}
      </div>
      {color && (
        <ExpandedRowContent
          data={item[expandedContentKey]}
          expandedColumns={expandedColumns}
          expandedRows={expandedRows}
          gridExpandedTemplateColumns={gridExpandedTemplateColumns}
        />
      )}
    </>
  ),
);

const TableRowCell = tableRow.tableRowCell(div({} as { selector?: boolean }));

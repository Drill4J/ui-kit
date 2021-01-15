import { Children, ReactNode } from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { TableRow } from './table__row';
import { TableHeader } from './table__header';
import { Sort } from './table-types';

import styles from './table.module.scss';

interface Props {
  className?: string;
  data?: Array<{ [key: string]: unknown }>;
  children: any;
  idKey?: string;
  footer?: ReactNode;
  expandedRows?: string[];
  expandedColumns?: any[];
  expandedContentKey?: string;
  withoutHeader?: boolean;
  selectedRows?: string[];
  sort?: Sort;
  onSort?: (sort: Sort) => void;
  gridTemplateColumns?: string;
  gridExpandedTemplateColumns?: string;
}

const table = BEM(styles);

export const Table = table(
  ({
    className,
    data = [],
    children,
    idKey = '',
    footer,
    expandedRows = [],
    expandedColumns,
    expandedContentKey,
    withoutHeader,
    selectedRows = [],
    sort,
    onSort,
    gridTemplateColumns = '',
    gridExpandedTemplateColumns = '',
  }: Props) => {
    const columns = Children.map(children, (column) => column?.props);
    const expandedColumnsComponents = Children.map(expandedColumns, (column) => column?.props);
    const defaultGridTemplateColumns = !expandedColumns
      ? `40% repeat(${columns?.length - 1}, 1fr)`
      : `32px 40% repeat(${columns?.length - 2}, 1fr)`;
    const defaultGridExpandedTemplateColumns = expandedColumns
      ? `32px 40% repeat(${expandedColumns?.length - 2}, 1fr)`
      : `repeat(${columns?.length}, 1fr)`;

    return (
      <div className={className}>
        {!withoutHeader && (
          <TableHeader
            columns={columns}
            gridTemplateColumns={gridTemplateColumns || defaultGridTemplateColumns}
            sort={sort}
            onSort={onSort}
          />
        )}
        {data.map((item, index) => (
          <TableRow
            key={idKey ? String(item[idKey]) : index}
            item={item}
            columns={columns}
            index={index}
            expandedColumns={expandedColumnsComponents}
            color={getRowColor({ expandedRows, selectedRows, itemId: String(item[idKey]) })}
            expandedContentKey={expandedContentKey}
            expandedRows={expandedRows}
            gridTemplateColumns={gridTemplateColumns || defaultGridTemplateColumns}
            gridExpandedTemplateColumns={
              gridExpandedTemplateColumns || defaultGridExpandedTemplateColumns
            }
          />
        ))}
        {footer}
      </div>
    );
  },
);

// eslint-disable-next-line consistent-return
function getRowColor({
  expandedRows,
  selectedRows,
  itemId,
}: {
  expandedRows: string[];
  selectedRows: string[];
  itemId: string;
}) {
  if (expandedRows.includes(itemId)) {
    return 'blue';
  }
  if (selectedRows.includes(itemId)) {
    return 'yellow';
  }
}

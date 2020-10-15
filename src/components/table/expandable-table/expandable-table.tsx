import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Table } from '../table';
import { Column } from '../column';
import { RowExpander } from './row-expander';
import { Sort } from '../table-types';

import styles from './expandable-table.module.scss';

interface Props {
  data: object[];
  idKey: string;
  children: React.ReactNode;
  columnsSize?: 'wide' | 'medium';
  expandedColumns?: any[];
  expandedContentKey: string;
  secondLevelExpand?: any[];
  className?: string;
  hasSecondLevelExpand?: boolean;
  sort: Sort;
  onSort: (sort: Sort) => void;
}

const expandableTable = BEM(styles);

export const ExpandableTable = expandableTable(
  ({
    children,
    data,
    idKey,
    expandedColumns,
    className,
    expandedContentKey,
    sort,
    onSort,
    ...restProps
  }: Props) => {
    const [expandedRows, setExpandedRows] = React.useState<string[]>([]);
    return (
      <Table
        className={className}
        data={data as any}
        expandedRows={expandedRows}
        idKey={idKey}
        expandedColumns={expandedColumns}
        expandedContentKey={expandedContentKey}
        sort={sort}
        onSort={onSort}
        {...restProps}
      >
        {[
          getExpanderColumn({
            idKey, expandedRows, setExpandedRows, expandedContentKey,
          }),
          ...React.Children.toArray(children),
        ]}
      </Table>
    );
  },
);

const getExpanderColumn = ({
  expandedRows,
  setExpandedRows,
  idKey,
  withMargin,
  expandedContentKey,
}: {
  idKey: string;
  expandedRows: string[];
  setExpandedRows: (arg: string[]) => void;
  withMargin?: boolean;
  expandedContentKey: string;
}) => (
  <Column
    name="selector"
    key={idKey}
    Cell={({ item }) => (item[expandedContentKey] ? (
      <RowExpander
        onClick={() => {
          expandedRows.includes(item[idKey])
            ? setExpandedRows(expandedRows.filter((selectedItem) => selectedItem !== item[idKey]))
            : setExpandedRows([...expandedRows, item[idKey]]);
        }}
        expanded={expandedRows.includes(item[idKey])}
        key={item[idKey]}
        withMargin={withMargin}
      />
    ) : null)}
  />
);

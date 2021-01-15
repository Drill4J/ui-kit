import { Children, useState, ReactNode } from 'react';

import { Table } from '../table';
import { Column } from '../column';
import { RowExpander } from './row-expander';
import { Sort } from '../table-types';

interface Props {
  data: object[];
  idKey: string;
  children: ReactNode;
  expandedColumns?: any[];
  expandedContentKey: string;
  secondLevelExpand?: any[];
  className?: string;
  hasSecondLevelExpand?: boolean;
  sort?: Sort;
  onSort?: (sort: Sort) => void;
  gridTemplateColumns?: string;
  gridExpandedTemplateColumns?: string;
}

export const ExpandableTable = ({
  children,
  data,
  idKey,
  expandedColumns,
  className,
  expandedContentKey,
  sort,
  onSort,
  gridTemplateColumns,
  gridExpandedTemplateColumns,
  ...restProps
}: Props) => {
  const [expandedRows, setExpandedRows] = useState<string[]>([]);
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
      gridTemplateColumns={gridTemplateColumns}
      gridExpandedTemplateColumns={gridExpandedTemplateColumns}
    >
      {[
        getExpanderColumn({
          idKey,
          expandedRows,
          setExpandedRows,
          expandedContentKey,
        }),
        ...Children.toArray(children),
      ]}
    </Table>
  );
};

const getExpanderColumn = ({
  expandedRows,
  setExpandedRows,
  idKey,
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
    Cell={({ item }) =>
      (item[expandedContentKey] ? (
        <RowExpander
          onClick={() => {
            expandedRows.includes(item[idKey])
              ? setExpandedRows(expandedRows.filter((selectedItem) => selectedItem !== item[idKey]))
              : setExpandedRows([...expandedRows, item[idKey]]);
          }}
          expanded={expandedRows.includes(item[idKey])}
          key={item[idKey]}
        />
      ) : null)}
    align="end"
  />
);

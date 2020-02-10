import * as React from 'react';
// eslint-disable-next-line import/no-cycle
import { TableRow } from './table__row';

interface Props {
  data: any;
  expandedColumns?: any[];
  idKey?: string;
  expandedRows?: string[];
  secondLevelExpand?: any[];
}

export const ExpandedRowContent = ({
  data = [],
  expandedColumns = [],
  idKey = 'name',
  expandedRows = [],
  secondLevelExpand = [],
}: Props) => data.map((item: any, index: number) => (
  <TableRow
    key={idKey ? String(item[idKey]) : index}
    item={item}
    columns={expandedColumns}
    index={index}
    expandedColumns={secondLevelExpand}
    color={expandedRows.includes(String(item[idKey])) ? 'gray' : undefined}
    expandedContentKey="methods"
  />
));

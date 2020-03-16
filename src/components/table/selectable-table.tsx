import * as React from 'react';

import { Inputs } from '../../forms';
import { Table } from './table';
import { Column } from './column';

interface Props {
  data: any[];
  children: React.ReactNode;
  idKey: string;
  footer?: React.ReactNode;
  selectedRows: string[];
  onSelect: (selectedItems: string[]) => any;
  columnsSize?: 'wide' | 'medium';
  checkboxDescriptor?: <O>(item: O) => boolean;
  defaultSortField?: string;
}

export const SelectableTable = ({
  children,
  data,
  onSelect,
  idKey,
  selectedRows,
  checkboxDescriptor,
  defaultSortField,
  ...restProps
}: Props) => {
  const isAllSelected = selectedRows.length === data.length;

  return (
    <Table data={data} selectedRows={selectedRows} idKey={idKey} {...restProps} defaultSortField={defaultSortField}>
      <Column
        name="selector"
        Cell={({ item }) => {
          const isSelectable = checkboxDescriptor ? checkboxDescriptor(item) : true;
          return isSelectable ? (
            <Inputs.Checkbox
              onChange={() => {
                selectedRows.includes(item[idKey])
                  ? onSelect(selectedRows.filter((selectedItem) => selectedItem !== item[idKey]))
                  : onSelect([...selectedRows, item[idKey]]);
              }}
              checked={isAllSelected || selectedRows.includes(item[idKey])}
            />
          ) : null;
        }}
        HeaderCell={() => (
          <Inputs.Checkbox
            onChange={() => {
              onSelect(
                !isAllSelected
                  ? data.reduce((acc, item: any) => {
                    if (!checkboxDescriptor) {
                      return [...acc, String(item[idKey])];
                    }
                    return checkboxDescriptor(item) ? [...acc, String(item[idKey])] : acc;
                  }, [])
                  : [],
              );
            }}
            checked={isAllSelected}
          />
        )}
      />
      {children}
    </Table>
  );
};

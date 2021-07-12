/*
* Copyright 2020 EPAM Systems
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
import React, { useMemo, useState } from 'react';
import {
  useTable, useExpanded, Column, useSortBy, usePagination,
} from 'react-table';
import { withErrorBoundary } from 'react-error-boundary';
import { Order } from '@drill4j/types-admin';
import 'twin.macro';

import { Icons } from '../icon';
import { TableErrorFallback } from '../error-fallback';
import {
  setSearch, setSort, useTableActionsDispatch, useTableActionsState,
} from './table-actions';
import { SearchPanel } from '../search-panel';
import { TableElements } from './table-elements';
import { Pagination } from './pagination';

type CustomColumn = Column & { textAlign?: string; width?: string; notSortable?: boolean; }

interface Props {
  columns: Array<CustomColumn>;
  data: Array<any>;
  filteredCount?: number;
  placeholder?: string;
  renderRowSubComponent?: ({ row, rowProps }: any) => JSX.Element;
  stub?: React.ReactNode;
  isDefaulToggleSortBy?: boolean;
  columnsDependency?: Array<string | number | boolean | null | undefined>;
}

export const Table = withErrorBoundary(({
  columns,
  data,
  filteredCount = 0,
  placeholder = 'Search value by name',
  renderRowSubComponent,
  stub = null,
  isDefaulToggleSortBy,
  columnsDependency = [],
}: Props) => {
  const {
    page,
    getTableProps, getTableBodyProps, headerGroups, prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  }: any = useTable(
    {
      columns: useMemo(() => columns, [...columnsDependency]),
      data: useMemo(() => data, [data]),
      initialState: { pageSize: 25 },
      autoResetPage: false,
    } as any,
    useSortBy,
    useExpanded,
    usePagination,
  );

  const dispatch = useTableActionsDispatch();
  const { sort: [sort], search } = useTableActionsState();
  const [searchQuery] = search;

  const [expandedRows, setExpandedRows] = useState<string[]>([]);

  if (typeof data !== 'object') {
    throw new Error('Table received incorrect data');
  }

  const toggleSort = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, column: any) => {
    gotoPage(0);
    isDefaulToggleSortBy
      ? column.getSortByToggleProps().onClick(event)
      : dispatch(setSort({ order: setOrder(sort?.order), field: column.id }));
  };

  const TableHeaderRow = ({ headerGroup }: any) => (
    <tr {...headerGroup.getHeaderGroupProps()} tw="h-13 px-4">
      {headerGroup.headers.map((column: any) => {
        const active = column.id === sort?.field;
        return (
          <TableElements.TH
            style={{ textAlign: column.textAlign || 'right', width: column.width }}
            data-test={`table-th-${column.id}`}
          >
            <div tw="relative inline-flex items-center">
              {!column.notSortable && (
                <TableElements.SortArrow active={column.isSorted || active} onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => toggleSort(event, column)}>
                  <Icons.SortingArrow rotate={column.isSortedDesc || (active && sort?.order === 'DESC') ? 0 : 180} />
                </TableElements.SortArrow>
              )}
              {column.render('Header')}
            </div>
          </TableElements.TH>
        );
      })}
    </tr>
  );

  const TableRow = ({ rowProps, row }: any) => (
    <TableElements.TR {...rowProps} isExpanded={row.isExpanded}>
      {row.cells.map((cell: any) => (
        <td
          {...cell.getCellProps()}
          tw="first:px-4 last:px-4"
          style={{ textAlign: cell.column.textAlign || 'right' }}
          data-test={`td-row-${cell.column.id}`}
        >
          <div
            data-test={`td-row-cell-${cell.column.id}`}
            onClick={() => cell.column.id === 'expander' &&
              setExpandedRows(row.isExpanded
                ? expandedRows.filter((id) => id !== row.original.id)
                : [...expandedRows, row.original.id])}
          >
            {cell.render('Cell')}
          </div>
        </td>
      ))}
    </TableElements.TR>
  );

  return (
    <>
      {Boolean(filteredCount) && (
        <div tw="mt-2">
          <SearchPanel
            onSearch={(searchValue) => {
              gotoPage(0);
              dispatch(setSearch([{ value: searchValue, field: 'name', op: 'CONTAINS' }]));
            }}
            searchQuery={searchQuery?.value}
            searchResult={filteredCount}
            placeholder={placeholder}
          />
        </div>
      )}
      <table {...getTableProps()} tw="table-fixed w-full text-14 leading-16 text-monochrome-black">
        <TableElements.TableHead>
          {headerGroups.map((headerGroup: any) => (
            <TableHeaderRow headerGroup={headerGroup} />
          ))}
        </TableElements.TableHead>
        <tbody {...getTableBodyProps()}>
          {page.map((rawRow: any) => {
            const row = { ...rawRow, isExpanded: expandedRows.includes(rawRow.original.id) };
            prepareRow(row);
            const rowProps = row.getRowProps();
            return (
              <React.Fragment key={row.original.id}>
                <TableRow row={row} rowProps={rowProps} />
                {row.isExpanded && renderRowSubComponent?.({ row, rowProps })}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
      {stub}
      <Pagination
        pagesLength={pageOptions.length}
        gotoPage={gotoPage}
        pageIndex={pageIndex}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageSize={pageSize}
        setPageSize={setPageSize}
        rowsCount={data.length}
      />
    </>
  );
}, {
  FallbackComponent: TableErrorFallback,
});

function setOrder(order: Order) {
  switch (order) {
    case 'ASC':
      return 'DESC';
    case 'DESC':
      return null;
    default:
      return 'ASC';
  }
}

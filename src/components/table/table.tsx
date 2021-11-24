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
import React, {
  useEffect, useMemo, useRef,
} from 'react';
import {
  useTable, useExpanded, Column, useSortBy, usePagination, useFilters,
} from 'react-table';
import { withErrorBoundary } from 'react-error-boundary';

import { Inputs } from '../forms';
import { TableErrorFallback } from '../error-fallback';
import { TableElements } from './table-elements';
import { Pagination } from './pagination';
import { DefaultTableHeaderColumn } from './default-table-header-column';
import { DefaultRow } from './default-row';

type CustomColumn = Column &
{ textAlign?: string; width?: string; notSortable?: boolean; disableEllipsis?: boolean, filterable?: boolean; };

interface SortBy {
  id: string;
  desc: boolean;
}

export interface Props {
  columns: Array<CustomColumn | any>;
  data: Array<any>;
  renderRowSubComponent?: ({ row, rowProps }: any) => JSX.Element;
  stub?: React.ReactNode;
  columnsDependency?: Array<string | number | boolean | null | undefined>;
  defaultSortBy?: SortBy[];
}

function DefaultColumnFilter({
  column: {
    filterValue = '', setFilter = () => {}, Header = '',
  } = {},
}: any) {
  return (
    <Inputs.Search
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
      }}
      reset={() => setFilter('')}
      placeholder={`Search by ${Header.toLowerCase()}`}
    />
  );
}

export const Table = withErrorBoundary(({
  columns,
  data,
  renderRowSubComponent,
  stub = null,
  columnsDependency = [],
  defaultSortBy = [],
}: Props) => {
  const filterTypes = React.useMemo(
    () => ({
      text: (rows: any, id: any, filterValue: any) => rows.filter((row:any) => {
        const rowValue = row.values[id];
        return rowValue !== undefined
          ? String(rowValue)
            .toLowerCase()
            .startsWith(String(filterValue).toLowerCase())
          : true;
      }),
    }),
    [],
  );

  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    [],
  );

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
    state: { pageIndex, pageSize, filters },
  }: any = useTable(
    {
      columns: useMemo(() => columns, [...columnsDependency]),
      data: useMemo(() => data, [data]),
      initialState: { pageSize: 25, sortBy: defaultSortBy },
      autoResetPage: false,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    } as any,
    useFilters,
    useSortBy,
    useExpanded,
    usePagination,
  );

  if (typeof data !== 'object') {
    throw new Error('Table received incorrect data');
  }

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => gotoPage(0), [filters]);

  return (
    <>
      <div ref={ref} />
      <table {...getTableProps()} tw="table-fixed relative w-full text-14 leading-16 text-monochrome-black">
        <TableElements.TableHead>
          {headerGroups.map((headerGroup: any) => (
            <tr tw="h-13 px-4">
              {headerGroup.headers.map((column: any) => <DefaultTableHeaderColumn column={column} />)}
            </tr>
          ))}
        </TableElements.TableHead>
        <tbody {...getTableBodyProps()}>
          {page.map((rawRow: any) => (
            <DefaultRow
              rawRow={rawRow}
              prepareRow={prepareRow}
              renderRowSubComponent={renderRowSubComponent}
              searchWords={filters.map(({ value = '' }) => value)}
            />
          ))}
        </tbody>
      </table>
      {page.length === 0 && stub}
      {page.length !== 0 && (
        <Pagination
          pagesLength={pageOptions.length}
          gotoPage={async (value: number) => {
            const newPage = value - 1; // in the react-table pages start from 0
            if (value > 0 && newPage < pageOptions.length && newPage !== pageIndex) {
              gotoPage(newPage);
              // need this code to be executed after rendering
              await ref && ref.current && ref.current.scrollIntoView({
                behavior: 'smooth',
              });
            }
          }}
          pageIndex={pageIndex}
          previousPage={() => {
            previousPage();
            ref && ref.current && ref.current.scrollIntoView({
              behavior: 'smooth',
            });
          }}
          nextPage={() => {
            nextPage();
            ref && ref.current && ref.current.scrollIntoView({
              behavior: 'smooth',
            });
          }}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          rowsCount={data.length}
        />
      )}
    </>
  );
}, {
  FallbackComponent: TableErrorFallback,
});

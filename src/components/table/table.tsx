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
import React, { useMemo, useRef, useState } from 'react';
import {
  useTable, useExpanded, Column, useSortBy, usePagination, useFilters,
} from 'react-table';
import { withErrorBoundary } from 'react-error-boundary';
import { Order } from '@drill4j/types-admin';
import tw from 'twin.macro';

import { Cells } from './cells';
import { Inputs } from '../forms';
import { Icons } from '../icon';
import { TableErrorFallback } from '../error-fallback';
import {
  setSearch, setSort, useTableActionsDispatch, useTableActionsState,
} from './table-actions';
import { SearchPanel } from '../search-panel';
import { TableElements } from './table-elements';
import { Pagination } from './pagination';

type CustomColumn = Column &
{ textAlign?: string; width?: string; notSortable?: boolean; disableEllipsis?: boolean, filterable?: boolean; };

interface SortBy {
  id: string;
  desc: boolean;
}

interface Props {
  columns: Array<CustomColumn>;
  data: Array<any>;
  filteredCount?: number;
  placeholder?: string;
  renderRowSubComponent?: ({ row, rowProps }: any) => JSX.Element;
  stub?: React.ReactNode;
  isDefaulToggleSortBy?: boolean;
  columnsDependency?: Array<string | number | boolean | null | undefined>;
  withSearch?: boolean;
  defaultSortBy?: SortBy[];
}

function DefaultColumnFilter({
  column: {
    filterValue = '', setFilter = () => {}, Header = '',
  } = {},
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div tw="relative z-50">
      <TableElements.ColumnSearchIcon active={isOpen} onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <div tw="absolute top-6 -left-2 w-60 p-4 rounded-lg bg-monochrome-white shadow text-14 leading-32 z-50">
          <Inputs.Search
            value={filterValue}
            onChange={e => {
              setFilter(e.target.value || undefined); // Set undefined to remove the filter entirely
            }}
            reset={() => setFilter('')}
            placeholder={`Search by ${Header.toLowerCase()}`}
          />
        </div>
      )}
    </div>
  );
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
  withSearch,
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

  const ref = useRef<HTMLDivElement>(null);

  return (
    <>
      {withSearch && (
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
      <div ref={ref} />
      <table {...getTableProps()} tw="table-fixed relative w-full text-14 leading-16 text-monochrome-black">
        <TableElements.TableHead>
          {headerGroups.map((headerGroup: any) => (
            <tr tw="h-13 px-4">
              {headerGroup.headers.map((column: any) => {
                const active = column.id === sort?.field;
                console.log(column);
                return (
                  <TableElements.TH
                    key={`table-th-${column.id}`}
                    style={{ textAlign: column.textAlign || 'right', width: column.filterable ? '100%' : column.width }}
                    data-test={`table-th-${column.id}`}
                  >
                    <TableElements.Label key={`table-label-${column.id}`}>
                      {!column.notSortable && (
                        <TableElements.SortArrow
                          active={column.isSorted || active}
                          onClick={(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => toggleSort(event, column)}
                        >
                          <Icons.SortingArrow
                            rotate={column.isSortedDesc || (active && sort?.order === 'DESC') ? 0 : 180}
                          />
                        </TableElements.SortArrow>
                      )}
                      <div tw="flex items-center gap-3">
                        {column.render('Header')}
                        {column.filterable ? column.render('Filter') : null}
                      </div>
                    </TableElements.Label>
                  </TableElements.TH>
                );
              })}
            </tr>
          ))}
        </TableElements.TableHead>
        <tbody {...getTableBodyProps()}>
          {page.map((rawRow: any) => {
            const row = { ...rawRow, isExpanded: expandedRows.includes(rawRow.original.id) };
            prepareRow(row);
            const rowProps = row.getRowProps();

            return (
              <React.Fragment key={rowProps.key}>
                <TableElements.TR isExpanded={row.isExpanded}>
                  {row.cells.map((cell: any) => {
                    const isDefaultCell = cell.column.filterable;
                    return (
                      <td
                        {...cell.getCellProps()}
                        css={[tw`px-4`, renderRowSubComponent && tw`first:pr-0`]}
                        style={{ textAlign: cell.column.textAlign || 'right' }}
                        data-test={`td-row-${cell.column.id}`}
                        key={cell.column.id}
                      >
                        <div
                          css={[!cell.column.disableEllipsis && tw`text-ellipsis`]}
                          title={cell?.value}
                          data-test={`td-row-cell-${cell.column.id}`}
                          onClick={() => cell.column.id === 'expander' &&
                          setExpandedRows(row.isExpanded
                            ? expandedRows.filter((id) => id !== row.original.id)
                            : [...expandedRows, row.original.id])}
                        >
                          {isDefaultCell
                            ? (
                              <Cells.Highlight
                                text={cell.value}
                                searchWords={[...filters.map(({ value = '' }) => value), searchQuery?.value]}
                              />
                            )
                            : cell.render('Cell')}
                        </div>
                      </td>
                    );
                  })}
                </TableElements.TR>
                {row.isExpanded && renderRowSubComponent?.({ row, rowProps })}
              </React.Fragment>
            );
          })}
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

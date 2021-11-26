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
import React, { useMemo } from 'react';
import {
  useTable, Column, useSortBy, useBlockLayout, useFilters,
} from 'react-table';
import { withErrorBoundary } from 'react-error-boundary';
import { FixedSizeList } from 'react-window';
import tw, { styled } from 'twin.macro';

import { Icons } from '../icon';
import { Cells } from './cells';
import { TableErrorFallback } from '../error-fallback';
import { TableHeader } from './table-header';
import { DefaultColumnFilter } from './filters';

type CustomColumn = Column &
{ textAlign?: string; width?: string; notSortable?: boolean; disableEllipsis?: boolean, filterable?: boolean; };

interface SortBy {
  id: string;
  desc: boolean;
}

export interface Props {
  columns: Array<CustomColumn | any>;
  data: Array<any>;
  stub?: React.ReactNode;
  columnsDependency?: Array<string | number | boolean | null | undefined>;
  defaultSortBy?: SortBy[];
  defaultFilters?: {id: string; value: string}[];
  name?: string;
  itemSize?: number;
}

export const VirtualizedTable = withErrorBoundary(({
  columns,
  data,
  stub = null,
  columnsDependency = [],
  defaultSortBy = [],
  defaultFilters = [],
  name = '',
  itemSize = 35,
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
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    totalColumnsWidth,
    prepareRow,
    state: { filters } = {} as any,
  } = useTable(
    {
      columns: useMemo(() => columns, [...columnsDependency]),
      data: useMemo(() => data, [data]),
      initialState: { sortBy: defaultSortBy, filters: defaultFilters },
      autoResetPage: false,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    } as any,
    useFilters,
    useSortBy,
    useBlockLayout,
  );

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);
      return (
        <div
          {...row.getRowProps({
            style,
          })}
        >
          <div tw="w-full grid grid-template-columns[3fr 1fr 1fr]">
            {row.cells.map((cell: any) => (
              <div
                {...cell.getCellProps()}
                style={{ width: cell.column.width }}
                tw="px-4 border-b border-monochrome-medium-tint bg-monochrome-white"
              >
                {cell.column.filterable
                  ? (
                    <Cells.Highlight
                      text={cell.value}
                      searchWords={filters.map(({ value = '' }) => value)}
                    />
                  )
                  : cell.render('Cell')}
              </div>
            ))}
          </div>
        </div>
      );
    },
    [prepareRow, rows],
  );

  const scrollBarSize = React.useMemo(() => {
    const scrollDiv = document.createElement('div');
    scrollDiv.setAttribute('style', 'width: 100px; height: 100px; overflow: scroll; position:absolute; top:-9999px;');
    document.body.appendChild(scrollDiv);
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    return scrollbarWidth;
  }, []);
  return (
    <>
      <TableHeader
        name={name}
        displayedResult={`Displaying ${rows.length === data.length ? itemSize : rows.length} of ${data.length} ${name}`}
        tw="mb-3"
      />
      <div {...getTableProps()} tw="w-full text-14 leading-24 text-monochrome-black bg-monochrome-white">
        <div tw="grid items-center w-full h-13 bg-monochrome-white border-monochrome-black border-t border-b">
          {headerGroups.map(headerGroup => (
            <HeaderGroup {...headerGroup.getHeaderGroupProps()} style={{ display: 'grid !important' }}>
              {headerGroup.headers.map((column: any) => (
                <div {...column.getHeaderProps()} tw="w-full px-4">
                  <div tw="flex gap-3 items-center font-weight[600]" style={{ width: column.width }}>
                    <Label>
                      {!column.notSortable && (
                        <SortArrow
                          active={column.isSorted}
                          {...column.getHeaderProps(column.getSortByToggleProps())}
                        >
                          <Icons.SortingArrow rotate={column.isSortedDesc ? 0 : 180} />
                        </SortArrow>
                      )}
                      {column.render('Header')}
                    </Label>
                    {column.filterable ? column.render('Filter') : null}
                  </div>
                </div>
              ))}
            </HeaderGroup>
          ))}
        </div>

        <div {...getTableBodyProps()} tw="w-full h-[576px]">
          {rows.length === 0
            ? stub
            : (
              <FixedSizeListWithCustomScroll
                height={576}
                itemCount={rows.length}
                itemSize={itemSize}
                width={totalColumnsWidth + scrollBarSize}
              >
                {RenderRow}
              </FixedSizeListWithCustomScroll>
            )}
        </div>
      </div>
    </>
  );
}, {
  FallbackComponent: TableErrorFallback,
});

const FixedSizeListWithCustomScroll = styled(FixedSizeList)`
  ${tw`grid`}
  ::-webkit-scrollbar {
    ${tw`w-[14px] rounded`}
  }

  ::-webkit-scrollbar-track {
    ${tw`bg-transparent rounded`}
  }

  ::-webkit-scrollbar-thumb {
    ${tw`bg-monochrome-dark-tint border-4 border-solid rounded-full border-monochrome-white hover:bg-blue-medium-tint`}
  }
`;

const HeaderGroup = styled.div`
  ${tw`grid w-full grid-flow-col grid-template-columns[3fr 1fr 1fr] overflow-y-scroll`}

  ::-webkit-scrollbar {
    ${tw`w-[14px] rounded`}
  }

  ::-webkit-scrollbar-track {
    ${tw`bg-monochrome-white rounded`}
  }

  ::-webkit-scrollbar-thumb {
    ${tw`bg-monochrome-white border-4 border-solid rounded-full border-monochrome-white`}
  }
`;

const SortArrow = styled.div`
  ${tw`invisible absolute top-[6px] -left-3 h-4 w-4 text-blue-medium-tint cursor-pointer`};

  ${({ active }: { active: boolean }) => active && tw`visible text-blue-shade`}
`;

const Label = styled.span`
  ${tw`relative inline-flex items-center`};

  &:hover ${SortArrow} {
    ${tw`visible`};
  }
`;

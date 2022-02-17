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
import React, { useMemo, useRef, useEffect } from 'react';
import {
  useTable, Column, useSortBy, useBlockLayout, useFilters,
} from 'react-table';
import { withErrorBoundary } from 'react-error-boundary';
import { FixedSizeList } from 'react-window';
import tw, { styled } from 'twin.macro';

import { useHistory } from 'react-router-dom';
import { Icons } from '../icon';
import { Cells } from './cells';
import { TableErrorFallback } from '../error-fallback';
import { DefaultColumnFilter } from './filters';
import { alphanumeric } from './sorting/alphanumeric';
import { useQueryParams, useElementSize } from '../../hooks';
import { addQueryParamsToPath, removeQueryParamsFromPath } from '../../utils';

type CustomColumn = Column &
{ textAlign?: string; width?: string; notSortable?: boolean; disableEllipsis?: boolean, filterable?: boolean; isCustomCell?: boolean };

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
  renderHeader?: (data: { currentCount: number, totalCount: number }) => JSX.Element;
  listHeight?: number;
  listItemSize?: number;
  initialRowsCount?: number;
  gridTemplateColumns?: string;
}

export const VirtualizedTable = withErrorBoundary(({
  columns,
  data,
  stub = null,
  columnsDependency = [],
  defaultSortBy = [],
  defaultFilters = [],
  renderHeader,
  listHeight = 500,
  listItemSize = 62,
  initialRowsCount = 0,
  gridTemplateColumns = '',
  ...rest
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

  const { virtualTableState = '{"filters":[]}' } = useQueryParams<{ virtualTableState?: string }>();
  const parsedTableState = JSON.parse(virtualTableState);

  const {
    setAllFilters,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { filters } = {} as any,
  }: any = useTable(
    {
      columns: useMemo(() => columns.map((col) => ({ ...col, sortType: alphanumeric })), [...columnsDependency]),
      data: useMemo(() => (data.length > 0 ? data : Array(initialRowsCount).fill(initialRowsCount)), [data]),
      initialState: { sortBy: defaultSortBy, filters: defaultFilters, ...parsedTableState },
      autoResetPage: false,
      defaultColumn, // Be sure to pass the defaultColumn option
      filterTypes,
    } as any,
    useFilters,
    useSortBy,
    useBlockLayout,
  );
  const { push } = useHistory() || {};

  useEffect(() => { // set state to url
    const newState = JSON.stringify({ filters });
    if (newState !== virtualTableState) {
      if (filters.length === 0) {
        push(removeQueryParamsFromPath(['virtualTableState']));
        return;
      }
      push(addQueryParamsToPath({ virtualTableState: newState }));
    }
  }, [filters]);

  useEffect(() => { // set state from url when we navigate via back/froward buttons in browser
    const { filters: filtersFromUrl = [] } = parsedTableState;
    setAllFilters(filtersFromUrl);
  }, [virtualTableState]);

  const RenderRow = React.useCallback(
    ({ index, style }) => {
      const row = rows[index];
      prepareRow(row);

      return (
        <div
          tw="bg-monochrome-white hover:bg-monochrome-light-tint"
          {...row?.getRowProps({
            style,
          })}
        >
          <div tw="w-full h-full grid" style={{ gridTemplateColumns }}>
            {row.cells.map((cell: any) => (
              <div
                {...cell.getCellProps()}
                style={{ width: cell.column.width }}
                tw="grid items-center grid-cols-1 h-full max-width[100%] px-4 border-b border-monochrome-medium-tint"
              >
                {cell.column.filterable && !cell.column.isCustomCell
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

  const listContainerElement = useRef(null);
  const { height: listContainerHeight } = useElementSize(listContainerElement);

  return (
    <>
      {renderHeader && renderHeader({ currentCount: rows.length, totalCount: data.length })}
      <div {...getTableProps()} tw="w-full text-14 leading-24 text-monochrome-black bg-monochrome-white" {...rest}>
        <div tw="grid items-center w-full h-13 bg-monochrome-white border-monochrome-black border-t border-b">
          {headerGroups.map((headerGroup: any) => (
            <HeaderGroup
              {...headerGroup.getHeaderGroupProps()}
              style={{ display: 'grid !important', gridTemplateColumns }}
              withScroll={listItemSize * rows.length > listContainerHeight}
            >
              {headerGroup.headers.map((column: any) => (
                <div {...column.getHeaderProps()} tw="w-full px-4">
                  <div tw="flex gap-3 items-center font-weight[600]" style={{ width: column.width }}>
                    <Label css={!column.notSortable && tw`cursor-pointer`} {...column.getHeaderProps(column.getSortByToggleProps())}>
                      {!column.notSortable && (
                        <SortArrow active={column.isSorted}>
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

        <div {...getTableBodyProps()} tw="w-full flex-grow min-h-[1px]" ref={listContainerElement}>
          {rows.length === 0
            ? stub
            : (
              <FixedSizeListWithCustomScroll
                width="auto"
                height={listContainerHeight}
                itemSize={listItemSize}
                itemCount={rows.length}
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
  will-change: auto;
  ${tw`grid overflow-y-scroll`}
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
  ${tw`grid w-full grid-flow-col grid-template-columns[3fr 1fr 1fr]`}

  ${({ withScroll }: {withScroll: boolean}) => withScroll && tw`overflow-y-scroll`}

  ::-webkit-scrollbar {
    ${tw`w-[14px] rounded`}
  }

  ::-webkit-scrollbar-track {
    ${tw`bg-transparent rounded`}
  }

  ::-webkit-scrollbar-thumb {
    ${tw`bg-transparent border-4 border-solid rounded-full border-transparent`}
  }
`;

const SortArrow = styled.div`
  ${tw`invisible absolute top-[6px] -left-3 h-4 w-4 text-blue-medium-tint cursor-pointer`};

  ${({ active }: { active: boolean }) => active && tw`visible text-blue-shade`}
`;

const Label = styled.span<{css: string}>`
  ${tw`relative inline-flex items-center`};

  &:hover ${SortArrow} {
    ${tw`visible`};
  }
`;

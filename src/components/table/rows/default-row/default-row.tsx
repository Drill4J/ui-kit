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
import { useLayoutEffect, useState } from 'react';
import tw from 'twin.macro';

import { Cells } from '../../cells';
import { TableElements } from '../../table-elements';

export const DefaultRow = ({
  rawRow, prepareRow, renderRowSubComponent, searchWords, isDefaultExpanded = false,
}: any) => {
  const [expandedRowId, setExpandedRowId] = useState<null | string>(null);

  useLayoutEffect(() => {
    setExpandedRowId(null);
  }, [rawRow.id]);

  useLayoutEffect(() => {
    setExpandedRowId(isDefaultExpanded ? rawRow.id : null);
  }, []);

  const row = { ...rawRow, isExpanded: expandedRowId === rawRow.id };
  prepareRow(row);
  const rowProps = row.getRowProps();

  return (
    <>
      <TableElements.TR isExpanded={row.isExpanded}>
        {row?.cells?.map((cell: any) => {
          const isDefaultCell = cell.column.filterable && !cell.column.isCustomCell;
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
                data-test={`td-row-cell-${cell.column.id}`}
                onClick={() => {
                  if (cell.column.id === 'expander') {
                    setExpandedRowId(expandedRowId ? null : row.id);
                  }
                }}
              >
                {isDefaultCell
                  ? (
                    <Cells.Highlight
                      title={cell?.value}
                      text={cell.value}
                      searchWords={searchWords}
                    />
                  )
                  : cell.render('Cell')}
              </div>
            </td>
          );
        })}
      </TableElements.TR>
      {row.isExpanded && renderRowSubComponent?.({ row, rowProps })}
    </>
  );
};

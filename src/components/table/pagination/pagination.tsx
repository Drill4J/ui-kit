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
import { useCallback } from 'react';
import 'twin.macro';

import { Icons } from '../../icon';
import { PaginationElements } from './pagination-elements';
import { SelectRowsCountDropdown } from './select-rows-count-drop-down';
import { Ellipsis } from './ellipsis';

interface Props {
  pagesLength: number;
  gotoPage: (value: number) => void;
  pageIndex: number;
  previousPage: () => void;
  nextPage: () => void;
  canPreviousPage: boolean;
  canNextPage: boolean;
  pageSize: number;
  setPageSize: (pageSize: number) => void;
  rowsCount: number;
}

export const MAX_PAGES_WITH_ELLIPSIS_COUNT = 7;
export const FIRST_OR_LAST_NUMBER_WITH_ELIPSIS = 2;
export const MAX_LEFT_OR_RIGHT_PAGES_COUNT = MAX_PAGES_WITH_ELLIPSIS_COUNT - FIRST_OR_LAST_NUMBER_WITH_ELIPSIS;

export const Pagination = ({
  pagesLength, gotoPage, pageIndex, previousPage, nextPage, canPreviousPage, canNextPage, pageSize, setPageSize, rowsCount,
}: Props) => {
  const createArray = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

  const currentPage = pageIndex + 1;

  const renderPage = (page: number) => (
    <PaginationElements.PageNumber
      key={page}
      active={page === currentPage}
      onClick={() => gotoPage(page)}
      data-test="pagination:element"
    >
      {page}
    </PaginationElements.PageNumber>
  );

  const renderPages = (from: number, to: number) => (
    <>
      {createArray(from, to).map(renderPage)}
    </>
  );

  const MemoEllipsis = useCallback(() => <Ellipsis gotoPage={gotoPage} />, []);

  const renderPagesWithEllipsis = () => {
    if (currentPage < MAX_LEFT_OR_RIGHT_PAGES_COUNT) {
      return (
        <>
          {renderPages(1, MAX_LEFT_OR_RIGHT_PAGES_COUNT)}
          <MemoEllipsis />
          {renderPage(pagesLength)}
        </>
      );
    }

    const lastPagesStart = pagesLength + 1 - MAX_LEFT_OR_RIGHT_PAGES_COUNT;
    if (currentPage > lastPagesStart) {
      return (
        <>
          {renderPage(1)}
          <MemoEllipsis />
          {renderPages(lastPagesStart, pagesLength)}
        </>
      );
    }

    return (
      <>
        {renderPage(1)}
        <MemoEllipsis />
        {renderPages(currentPage - 1, currentPage + 1)}
        <MemoEllipsis />
        {renderPage(pagesLength)}
      </>
    );
  };

  const Pages = () => (pagesLength < MAX_PAGES_WITH_ELLIPSIS_COUNT
    ? renderPages(1, pagesLength)
    : renderPagesWithEllipsis());

  return (
    <div tw="flex justify-between pr-1 pt-4">
      {rowsCount >= 25 && (
        <span data-test="table:displaying-results-count" tw="flex items-center gap-x-1 text-14 leading-32 text-monochrome-default">
          Displaying
          <SelectRowsCountDropdown
            values={[25, 50, 100]}
            action={(value) => setPageSize(Number(value))}
            initialValue={pageSize}
            currentPage={currentPage}
            pagesLength={pagesLength}
            pageIndex={pageIndex}
            rowsCount={rowsCount}
          />
          &nbsp;of
          <span tw="text-monochrome-black font-bold" data-test="table:rows:count">{rowsCount}</span>
          rows
        </span>
      )}
      {pagesLength > 1 && (
        <div tw="flex text-monochrome-default">
          <PaginationElements.PaginationArrow
            disabled={!canPreviousPage}
            onClick={() => canPreviousPage && previousPage()}
            data-test="table-pagination:pagination-arrow-left"
          >
            <Icons.Expander width={6} height={8} rotate={180} />
          </PaginationElements.PaginationArrow>
          <Pages />
          <PaginationElements.PaginationArrow
            disabled={!canNextPage}
            onClick={() => canNextPage && nextPage()}
            data-test="table-pagination:pagination-arrow-right"
          >
            <Icons.Expander width={6} height={8} />
          </PaginationElements.PaginationArrow>
        </div>
      )}
    </div>
  );
};

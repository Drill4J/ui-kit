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
import 'twin.macro';

import { Popover } from '../../popover';
import { Icons } from '../../icon';

interface SelectRowsCountDropdownProps {
  values: number[];
  action: (value: number) => void;
  initialValue: number
  currentPage: number;
  pagesLength: number;
  pageIndex: number;
  rowsCount: number;
}

export const SelectRowsCountDropdown = ({
  values, action, initialValue, currentPage, pagesLength, pageIndex, rowsCount,
}: SelectRowsCountDropdownProps) => (
  <Popover>
    {({ setIsOpen, isOpen }) => (
      <>
        <span
          tw="flex items-center gap-x-1 text-monochrome-black cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
          data-test="table-pagination:select-rows-dropdown"
        >
          <span tw="font-bold" data-test="table-pagination:page-rows">
            {`${initialValue * (currentPage) - initialValue}-${pagesLength === pageIndex + 1
              ? rowsCount : (initialValue * (currentPage))}`}
          </span>
          <Icons.Expander width={8} height={8} rotate={isOpen ? 90 : -90} />
        </span>
        {isOpen && (
          <div tw="absolute -top-24 shadow bg-monochrome-white z-50">
            {values.map((value) => (
              <div
                tw="flex items-center px-2 w-36 hover:bg-monochrome-light-tint"
                onClick={(() => action(value))}
                key={value}
                data-test="table-pagination:select-rows-dropdown:item"
              >
                {initialValue === value && <Icons.Check width={14} height={10} viewBox="0 0 14 10" tw="absolute text-blue-default" />}
                <span tw="ml-6">{`${value} per page`}</span>
              </div>
            ))}
          </div>
        )}
      </>
    )}
  </Popover>
);

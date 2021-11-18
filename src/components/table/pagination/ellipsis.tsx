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
import { useState } from 'react';
import 'twin.macro';

import { Popover } from '../../popover';
import { PaginationElements } from './pagination-elements';

interface Props {
  gotoPage: (number: number) => void
}

export const Ellipsis = ({ gotoPage }: Props) => {
  const [number, setNumber] = useState<number>(0);

  const handleSubmit = (evt: any) => {
    evt.preventDefault();
    typeof number === 'number' && gotoPage(number);
  };
  return (
    <Popover tw="flex items-center h-8 px-3 text-monochrome-default" data-test="table-pagination:dots">
      {({ isOpen, setIsOpen }) => (
        <>
          <PaginationElements.Dots
            tw="flex items-end cursor-pointer hover:text-blue-medium-tint"
            active={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          >
            ...
          </PaginationElements.Dots>
          {isOpen && (
            <div tw="absolute" style={{ top: '-74px', left: '-46px' }}>
              <div tw="relative w-34 p-4 rounded-lg bg-monochrome-white shadow text-14 leading-32 z-50">
                <div tw="flex items-center gap-x-2 whitespace-nowrap">
                  Go to
                  <form onSubmit={handleSubmit} data-test="pagination:tooltip:form">
                    <PaginationElements.NumberInput
                      type="number"
                      value={number || ''}
                      onChange={e => setNumber(Number(e.target.value))}
                      data-test="pagination:tooltip:input"
                    />
                  </form>
                </div>
                <div tw="absolute left-14 w-6 overflow-hidden inline-block" style={{ top: '72px' }}>
                  <div tw="h-3 w-11 bg-monochrome-white transform origin-top-left" style={{ transform: 'rotate(-45deg)' }} />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </Popover>
  );
};

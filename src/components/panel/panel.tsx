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
import React from 'react';
import tw, { styled } from 'twin.macro';

export interface Props {
  header: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  isOpen: boolean;
  onClosePanel: () => void;
}

export const Panel = ({
  children, header, isOpen, onClosePanel, footer,
}: Props) => (isOpen
  ? (
    <Wrapper>
      <div tw="h-full flex flex-col text-monochrome-light-tint text-24">
        <div tw="px-6 py-7 leading-32 bg-monochrome-black">{header}</div>
        <div tw="bg-monochrome-black flex-grow bg-opacity-[0.97]">{children}</div>
        {footer && <div tw="h-18 bg-monochrome-black">{footer}</div>}
      </div>
      <div onClick={onClosePanel} style={{ background: 'rgba(0, 0, 0, 0.4)' }} />
    </Wrapper>
  ) : null
);

const Wrapper = styled.div`
  ${tw`absolute inset-0 left-12 z-40 grid w-auto h-auto`}
  grid-template-columns: auto 1fr;
`;

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
import tw, { styled } from 'twin.macro';

interface TabProps {
  active?: boolean
}

export const Tab = styled.div`
  ${tw`
      relative inline-flex pt-2 pb-3 text-14 leading-20 text-monochrome-default font-bold cursor-pointer capitalize
      hover:text-blue-medium-tint
  `};

  ${({ active }: TabProps) => active &&
    tw`
    text-blue-default
    after:(content block absolute bottom-0 h-1 w-full bg-blue-default rounded-t-lg)
  `}
`;

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

interface Props {
  icon: React.ReactNode;
  title: React.ReactNode;
  message: React.ReactNode;
  className?: string;
}

export const Stub = ({
  icon, title, message, className,
}: Props) => (
  <Content className={className}>
    <React.Fragment key="stub-icon">{ icon }</React.Fragment>
    <Title data-test="stub:title">
      { title }
    </Title>
    <Message data-test="stub:message">
      { message }
    </Message>
  </Content>
);

const Content = styled.div`
  ${tw`flex flex-col flex-grow py-10 px-0 justify-center items-center w-full h-full text-monochrome-medium-tint`};
`;

const Title = styled.div`
  ${tw`mt-4 mb-2 text-20 leading-32 text-monochrome-default`};
`;

const Message = styled.div`
  ${tw`text-14 leading-20 text-monochrome-default text-center`};
`;

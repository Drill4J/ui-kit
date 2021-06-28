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
import styled from 'styled-components';
import { COLORS } from '../../theme';

interface Props {
  icon: React.ReactNode;
  title: React.ReactNode;
  message: React.ReactNode;
}

export const Stub = ({ icon, title, message }: Props) => (
  <Content>
    { icon }
    <Title data-test="stub:title">
      { title }
    </Title>
    <Message data-test="stub:message">
      { message }
    </Message>
  </Content>
);

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  padding: 40px 0;
  color: ${COLORS.MONOCHROME.MEDIUM_TINT};
`;

const Title = styled.div`
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 20px;
  line-height: 32px;
  color: ${COLORS.MONOCHROME.DEFAULT};
`;

const Message = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 20px;
  color: ${COLORS.MONOCHROME.DEFAULT};
  text-align: center;
`;

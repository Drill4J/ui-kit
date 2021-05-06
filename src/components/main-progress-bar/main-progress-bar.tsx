import styled, { css } from 'styled-components';

import { COLORS } from '../../theme';

interface Props {
  className?: string;
  value: string;
  type?: 'primary' | 'secondary';
  testContext?: string;
}

export const MainProgressBar = ({
  className, value, type, testContext,
}: Props) => (
  <Wrapper className={className} data-test={`main-progress-bar:${(testContext || type)}`}>
    <Progress style={{ width: value }} type={type} />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 32px;
  border-radius: 4px;
  background: ${COLORS.MONOCHROME.LIGHT_TINT};;
`;

const Progress = styled.div<{type?: 'primary' | 'secondary'}>`
  height: 32px;
  border-radius: 4px;
  background: ${COLORS.DATA_VISUALIZATION.BUILD_COVER};
  ${({ type }) => [
    type === 'secondary' && css`background: ${COLORS.DATA_VISUALIZATION.OVERLAPPING}`,
    type === 'primary' && css`background: ${COLORS.DATA_VISUALIZATION.SCOPE_COVER}`,
  ]}
`;

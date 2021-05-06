import styled, { css } from 'styled-components';

import { COLORS } from '../../colors';

interface Props {
  className?: string;
  value: string;
  type?: 'primary' | 'secondary';
  testContext?: string;
}

export const AdditionalProgressBar = ({
  className,
  value,
  type,
  testContext,
}: Props) => (
  <Wrapper className={className} data-test={`additional-progress-bar:${testContext || type}`}>
    <Progress style={{ width: value }} type={type} />
  </Wrapper>
);

const Wrapper = styled.div`
  height: 12px;
  border-radius: 4px;
  background: ${COLORS.MONOCHROME.LIGHT_TINT};
`;

const Progress = styled.div<{ type?: 'primary' | 'secondary' }>`
  height: 12px;
  border-radius: 4px;
  background: ${COLORS.DATA_VISUALIZATION.BUILD_COVER};
  ${({ type }) => [
    typeof type !== 'undefined' && css`
      border-radius: 0 4px 4px 0;

      &:hover {
        transform: scaleY(1.7);
      }
    `,
    type === 'primary' && css`background: ${COLORS.DATA_VISUALIZATION.SCOPE_COVER}`,
    type === 'secondary' && css`background: ${COLORS.DATA_VISUALIZATION.OVERLAPPING}`]}
`;

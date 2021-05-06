import styled, { css } from 'styled-components';

import { Panel } from '../../layouts';
import { COLORS } from '../../theme';

interface Props {
  className?: string;
}

export const ProgressBarLegends = ({ className }: Props) => (
  <div className={className}>
    <Panel align="space-between">
      <Legend><Percentage type="start">0</Percentage></Legend>
      <Legend><Percentage>25</Percentage></Legend>
      <Legend><Percentage>50</Percentage></Legend>
      <Legend><Percentage>75</Percentage></Legend>
      <Legend><Percentage type="end">100</Percentage></Legend>
    </Panel>
  </div>
);

const Legend = styled.div`
  position: relative;
  width: 1px;
  height: 8px;
  background-color: ${COLORS.MONOCHROME.DARK_TINT};
`;

const Percentage = styled.div<{type?: 'start' | 'end'}>`
  position: absolute;
  left: 50%;
  top: 8px;
  transform: translate(-50%);
  font-size: 12px;
  color: ${COLORS.MONOCHROME.DARK_TINT};
  
  ${({ type }) => [
    type === 'start' && css`left: 4px`,
    type === 'end' && css`left: -8px`,
  ]}
`;

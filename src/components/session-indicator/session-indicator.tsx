import styled, { css } from 'styled-components';

import { path as circlePath } from './circle.path';
import { path as eyePath } from './eye.path';
import { COLORS } from '../../theme';

interface Props {
  className?: string;
  active?: boolean;
}

export const SessionIndicator = ({ className, active }: Props) => (
  <Wrapper className={className} viewBox="0 0 32 32">
    <g fillRule="nonzero" stroke="none" strokeWidth="1" fill="none">
      <CirclePath d={circlePath} />
      {active
        ? <EyePath d={eyePath} active />
        : <EyePath d={eyePath} />}
    </g>
  </Wrapper>
);

const Wrapper = styled.svg`
  width: 32px;
  height: 32px;
`;

const CirclePath = styled.path`
  fill: ${COLORS.GREEN.DEFAULT};
  transform-origin: 50% 50%;
  animation: rotation 2s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const EyePath = styled.path<{active?: boolean}>`
  stroke: ${COLORS.GREEN.DEFAULT};
  stroke-width: 1.3;
  
  ${({ active }) => active && css`
    stroke: none;
    fill: ${COLORS.RED.DEFAULT};
    animation: blinker 1.5s infinite cubic-bezier(1, 0, 0, 1)
  `}
  
  @keyframes blinker {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

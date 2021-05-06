import styled, { css } from 'styled-components';

import { path } from './path';
import { COLORS } from '../../theme';

interface Props {
  className?: string;
  value?: string;
  type: 'primary' | 'secondary';
}

export const StripedProgressBar = ({ className, value, type }: Props) => (
  <Wrapper className={className} type={type} width={value} height="12" data-test={`striped-progress-bar:${type}`}>
    <path
      d={path}
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      strokeDashoffset={value}
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="-100"
        to="1"
        additive="replace"
        dur="5"
        repeatCount="indefinite"
      />
    </path>
  </Wrapper>
);

const Wrapper = styled.svg<{type?: 'primary' | 'secondary'}>`
  display: block;
  border-radius: 0 4px 4px 0;
  transition: width 2000ms ease-in;

  ${({ type }) => [
    type === 'primary' && css`fill: ${COLORS.DATA_VISUALIZATION.SCOPE_COVER}`,
    type === 'secondary' && css`
      fill: ${COLORS.DATA_VISUALIZATION.OVERLAPPING};
      transform: rotate(180deg);
      border-radius: 4px 0 0 4px;
    `,
  ]}
`;

import styled, { css } from 'styled-components';

import { COLORS } from '../../theme';

interface Props {
  className?: string;
  value?: string;
  type: 'primary' | 'secondary';
}

export const StripedProgressBar = ({ className, value, type }: Props) => (
  <Wrapper className={className} type={type} style={{ width: value }} data-test={`striped-progress-bar:${type}`} />
);

const Wrapper = styled.div<{type?: 'primary' | 'secondary'}>`
  display: block;
  border-radius: 0 4px 4px 0;
  transition: width 2000ms ease-in;
  height: 12px;
  animation: 1s progress-bar-stripes linear infinite;
  background-size: 10px 10px;

  ${({ type }) => [
    type === 'primary' && css`
      background-image: linear-gradient(135deg,
      transparent 10%, ${COLORS.DATA_VISUALIZATION.SCOPE_COVER} 10%, ${COLORS.DATA_VISUALIZATION.SCOPE_COVER} 50%,
      transparent 50%,
      transparent 60%, ${COLORS.DATA_VISUALIZATION.SCOPE_COVER} 60%, ${COLORS.DATA_VISUALIZATION.SCOPE_COVER});
    `,
    type === 'secondary' && css`
      background-image: linear-gradient(135deg,
      transparent 10%, ${COLORS.DATA_VISUALIZATION.OVERLAPPING} 10%, ${COLORS.DATA_VISUALIZATION.OVERLAPPING} 50%,
      transparent 50%,
      transparent 60%, ${COLORS.DATA_VISUALIZATION.OVERLAPPING} 60%, ${COLORS.DATA_VISUALIZATION.OVERLAPPING});
      transform: rotate(180deg);
      border-radius: 4px 0 0 4px;
    `,
  ]}

  @keyframes progress-bar-stripes {
    from  { background-position: 0 0; }
    to    { background-position: 30px 0; }
  }
`;

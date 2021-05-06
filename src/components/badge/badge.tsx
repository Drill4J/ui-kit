import styled, { css } from 'styled-components';

import { COLORS, FONTS } from '../../theme';

interface Props {
  className?: string;
  children?: React.ReactNode;
  bold?: boolean;
  color?: 'green' | 'orange' | 'gray' | 'red';
}

export const Badge = styled.span<Props>`
  padding: 0 8px;
  border: 1px solid currentColor;
  border-radius: 11px;
  font-size: 12px;
  line-height: 20px;
  ${({ bold }) => bold && css`font-family: ${FONTS.SEMI_BOLD}`}
  ${({ color }) => [
    color === 'gray' && css`
      border: 1px solid ${COLORS.MONOCHROME.DEFAULT};
      color: ${COLORS.MONOCHROME.DEFAULT};
    `,
    color === 'green' && css`
      border: 1px solid ${COLORS.GREEN.DEFAULT};
      color: ${COLORS.GREEN.DEFAULT};
    `,
    color === 'orange' && css`
      border: 1px solid ${COLORS.ORANGE.DEFAULT};
      color: ${COLORS.ORANGE.DEFAULT};
    `,
    color === 'red' && css`
      border: 1px solid ${COLORS.RED.DEFAULT};
      color: ${COLORS.RED.DEFAULT};
    `,
  ]}
`;

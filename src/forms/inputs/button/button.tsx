import styled, { css } from 'styled-components';

import { ButtonType } from './button-type';
import { COLORS, FONTS } from '../../../theme';

export const Button = styled.button<ButtonType>`
  display: flex;
  align-items: center;
  border-radius: 16px;
  outline: 0;
  cursor: pointer;
  
  ${({ kind, size, disabled }) => [
    kind === 'primary' && css`
      border: 1px solid ${COLORS.PRIMARY_BLUE.DEFAULT};
      background-color: ${COLORS.PRIMARY_BLUE.DEFAULT};
      color: ${COLORS.MONOCHROME.WHITE};
      font-family: ${FONTS.SEMI_BOLD};

      &:hover {
        border: 1px solid ${COLORS.PRIMARY_BLUE.MEDIUM_TINT};
        background-color: ${COLORS.PRIMARY_BLUE.MEDIUM_TINT};
      }

      &:active {
        border: 1px solid ${COLORS.PRIMARY_BLUE.SHADE};
        background-color: ${COLORS.PRIMARY_BLUE.SHADE};
      }
    `,
    kind === 'secondary' && css`
      border: 1px solid ${COLORS.PRIMARY_BLUE.DEFAULT};
      background-color: ${COLORS.MONOCHROME.WHITE};
      color: ${COLORS.PRIMARY_BLUE.DEFAULT};
      font-family: ${FONTS.SEMI_BOLD};

      &:hover {
        border: 1px solid ${COLORS.PRIMARY_BLUE.MEDIUM_TINT};
      }

      &:active {
        border: 1px solid ${COLORS.PRIMARY_BLUE.SHADE};
      } 
    `,
    size === 'small' && css`
      height: 24px;
      line-height: 16px;
      padding: 0 12px;
      font-size: 12px; 
    `,
    size === 'large' && css`
      height: 32px;
      line-height: 20px;
      padding: 0 16px;
      font-size: 14px;
    `,
    disabled && css`
      opacity: 0.4;
      pointer-events: none;  
    `,
  ]}
`;

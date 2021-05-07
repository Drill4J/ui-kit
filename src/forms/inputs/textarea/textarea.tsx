import styled, { css } from 'styled-components';

import { TextareaProps } from './textarea-types';
import { COLORS, FONTS } from '../../../theme';

export const Textarea = styled.textarea<TextareaProps>`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 10px 16px;
  border-radius: 4px;
  font-family: ${FONTS.REGULAR};
  font-size: 14px;
  line-height: 20px;
  border: 1px solid ${COLORS.MONOCHROME.MEDIUM_TINT};
  color: ${COLORS.MONOCHROME.BLACK};
  outline: none;
  resize: none;

  &:focus {
    border: 1px solid ${COLORS.MONOCHROME.BLACK};
  }

  &::placeholder {
    color: ${COLORS.MONOCHROME.DEFAULT};
  }

  ${({ disabled, error }) => [
    disabled && css`
      border: 1px solid ${COLORS.MONOCHROME.MEDIUM_TINT};
      background-color: ${COLORS.MONOCHROME.LIGHT_TINT};
      color: ${COLORS.MONOCHROME.DEFAULT};
    `,
    error && css`border: 1px solid ${COLORS.RED.DEFAULT}`,
  ]}
`;

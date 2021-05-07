import styled, { css } from 'styled-components';

import { InputProps } from '../input-types';
import { COLORS, FONTS } from '../../../theme';

export const Input = ({ className, ...restProps }: InputProps) => (
  <div className={className}>
    <InputElement {...restProps} />
  </div>
);

const InputElement = styled.input<{disabled?: boolean; error?: boolean}>`
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  padding: 0 16px;
  line-height: 22px;
  border: 1px solid ${COLORS.MONOCHROME.MEDIUM_TINT};
  border-radius: 4px;
  background-color: ${COLORS.MONOCHROME.WHITE};
  color: ${COLORS.MONOCHROME.BLACK};
  font-family: ${FONTS.REGULAR};
  font-size: 14px;
  outline: none;

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

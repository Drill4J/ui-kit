import styled, { css } from 'styled-components';

import { Icons } from '../../../components';
import { CheckboxProps } from './checkbox-types';
import { COLORS } from '../../../theme';

export const Checkbox = ({
  onChange, checked, label, value, disabled, color,
}: CheckboxProps) => {
  const handleOnChange = () => {
    onChange &&
        onChange({
          target: {
            type: 'checkbox',
            checked: !checked,
          },
        } as React.ChangeEvent<HTMLInputElement>);
  };
  return (
    <Wrapper onClick={handleOnChange} disabled={disabled}>
      <CheckboxInput name={value} checked={checked} type="checkbox" />
      <CheckboxIconWrapper
        type={!checked && typeof label === 'string' ? label : undefined}
        checked={checked}
        color={color}
        data-test="checkbox:input"
      >
        {checked && <CheckMarkIcon width={10} height={7} viewBox="0 0 14 10" />}
      </CheckboxIconWrapper>
      {label && <Label data-test="checkbox:label">{label}</Label>}
    </Wrapper>
  );
};

const Wrapper = styled.div<{disabled?: boolean}>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: ${COLORS.MONOCHROME.WHITE};
  
  ${({ disabled }) => disabled && css`
    opacity: 0.3;
    pointer-events: none;
  `}
`;

const CheckboxInput = styled.input`
  display: none;
`;

const CheckboxIconWrapper = styled.div<{type?: string; checked?: boolean; color?: string }>`
  box-sizing: border-box;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: ${({ color }) => (color
    ? `1px solid ${color}`
    : `1px solid ${COLORS.PRIMARY_BLUE.MEDIUM_TINT}`)};

  &:hover {
    border: ${({ color }) => (color
    ? `1px solid ${color}`
    : `1px solid ${COLORS.PRIMARY_BLUE.MEDIUM_TINT}`)};
    opacity: ${({ color }) => color && 0.8};
  }
  
  ${({ type, checked, color }) => [
    type === 'all' && css`
      background-color: ${color || COLORS.PRIMARY_BLUE.DEFAULT};
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 8px;
        height: 2px;
        background-color: ${COLORS.MONOCHROME.WHITE};
        content: '';
      }

      &:hover {
        background-color: ${color || COLORS.PRIMARY_BLUE.MEDIUM_TINT};
      }
    `,
    checked && css`
      background-color: ${color || COLORS.PRIMARY_BLUE.DEFAULT};
      border: 1px solid ${color || COLORS.PRIMARY_BLUE.DEFAULT};

      &:hover {
        background-color: ${color || COLORS.PRIMARY_BLUE.MEDIUM_TINT};
        border: 1px solid ${color || COLORS.PRIMARY_BLUE.MEDIUM_TINT};
      }
    `,
  ]}
`;

const CheckMarkIcon = styled(Icons.Check)`
  position: absolute;
  top: 25%;
  left: 15%;
`;

const Label = styled.div`
  margin-left: 8px;
  font-size: 14px;
  line-height: 20px;
  color: ${COLORS.MONOCHROME.BLACK};
`;

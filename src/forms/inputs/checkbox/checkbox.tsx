import styled, { css } from 'styled-components';

import { Icons } from '../../../components';
import { CheckboxProps } from './checkbox-types';
import { COLORS } from '../../../theme';

export const Checkbox = ({
  className, onChange, checked, label, value, disabled,
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
    <Wrapper className={className} onClick={handleOnChange} disabled={disabled}>
      <CheckboxInput name={value} checked={checked} type="checkbox" />
      <CheckboxIconWrapper type={!checked ? label : undefined} checked={checked}>
        {checked && <CheckMarkIcon width={10} height={7} viewBox="0 0 14 10" />}
      </CheckboxIconWrapper>
      {label && <Label>{label}</Label>}
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

const CheckboxIconWrapper = styled.div<{type?: string; checked?: boolean}>`
  box-sizing: border-box;
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 1px solid ${COLORS.PRIMARY_BLUE.DEFAULT};

  &:hover {
    border: 1px solid ${COLORS.PRIMARY_BLUE.MEDIUM_TINT};
  }
  
  ${({ type, checked }) => [
    type === 'all' && css`
      background-color: ${COLORS.PRIMARY_BLUE.DEFAULT};
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
        background-color: ${COLORS.PRIMARY_BLUE.MEDIUM_TINT};
      }
    `,
    checked && css`
      background-color: ${COLORS.PRIMARY_BLUE.DEFAULT};

      &:hover {
        background-color: ${COLORS.PRIMARY_BLUE.MEDIUM_TINT};
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

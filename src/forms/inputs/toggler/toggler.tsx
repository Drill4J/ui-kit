import styled, { css } from 'styled-components';

import { COLORS } from '../../../theme';
import { Input } from '../input';
import { TogglerProps } from './toggler-types';

export const Toggler = ({
  className, label, value, onChange = () => {},
}: TogglerProps) => (
  <Checkbox className={className}>
    <CheckboxInput type="checkbox" checked={Boolean(value)} value={value} onChange={onChange} />
    <CheckboxTogglerLabel checked={Boolean(value)} />
    {label && <Label checked={Boolean(value)}>{label}</Label>}
  </Checkbox>
);

const Checkbox = styled.label`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 12px;
`;

const CheckboxInput = styled(Input)`
  opacity: 0;
  width: 0;
  height: 0;

  input {
    opacity: 0;
    width: 0;
    height: 0;
    margin: 0;
  }
`;

const CheckboxTogglerLabel = styled.span<{checked?: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${COLORS.MONOCHROME.DEFAULT};
  transition: 0.4s;
  border-radius: 6px;

  &::before {
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    left: 1px;
    bottom: 1px;
    background-color: ${COLORS.MONOCHROME.WHITE};
    transition: 0.4s;
    border-radius: 50%;
  }
  ${({ checked }) => checked && css`
    background-color: ${COLORS.GREEN.DEFAULT};

    &:hover {
      background-color: ${COLORS.GREEN.MEDIUM_TINT};
    }
    
    &:before {
      transform: translateX(8px);
    }
  `}
`;

const Label = styled.div<{checked?: boolean }>`
  position: absolute;
  left: 28px;
  top: -4px;
  font-size: 14px;
  color: ${COLORS.MONOCHROME.DEFAULT};
  white-space: nowrap;
  ${({ checked }) => checked && css`color: ${COLORS.GREEN.DEFAULT}`}
`;

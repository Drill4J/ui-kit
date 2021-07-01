import tw, { styled, css } from 'twin.macro';

import { Input } from '../input';
import { TogglerProps } from './toggler-types';

export const Toggler = ({
  label, value, onChange = () => {}, disabled,
}: TogglerProps) => (
  <Checkbox disabled={disabled}>
    <CheckboxInput type="checkbox" checked={Boolean(value)} value={value} onChange={onChange} />
    <CheckboxTogglerLabel checked={Boolean(value)} />
    {label && <Label checked={Boolean(value)}>{label}</Label>}
  </Checkbox>
);

const Checkbox = styled.label<{disabled?: boolean}>`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 12px;
  ${({ disabled }) => disabled && css`
    opacity: 0.3;
    pointer-events: none;
    cursor: default;
  `}
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

const CheckboxTogglerLabel = styled.span<{checked?: boolean}>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  ${tw`bg-monochrome-default`};
  transition: 0.4s;
  border-radius: 6px;

  &::before {
    position: absolute;
    content: '';
    height: 10px;
    width: 10px;
    left: 1px;
    bottom: 1px;
    ${tw`bg-monochrome-white`};
    transition: 0.4s;
    border-radius: 50%;
  }
  ${({ checked }) => checked && css`
    background-color: #00b602;

    &:hover {
      background-color: #33c535;
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
  color: #687481;
  white-space: nowrap;
  ${({ checked }) => checked && css`color: #00b602`}
`;

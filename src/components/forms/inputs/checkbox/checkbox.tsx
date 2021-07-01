import tw, { styled, css } from 'twin.macro';

import { Icons } from '../../../icon';
import { CheckboxProps } from './checkbox-types';

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
  ${tw`flex items-center cursor-pointer text-monochrome-white`}
  
  ${({ disabled }) => disabled && tw`opacity[0.3] pointer-events-none`}
`;

const CheckboxInput = styled.input`
  ${tw`hidden`}
`;

const CheckboxIconWrapper = styled.div<{type?: string; checked?: boolean; color?: string }>`
  ${tw`box-border relative w-4 h-4 rounded `}
  border: ${({ color }) => (color
    ? `1px solid ${color}`
    : `1px solid #3399ff`)};

  &:hover {
    border: ${({ color }) => (color
    ? `1px solid ${color}`
    : `1px solid #3399ff`)};
    opacity: ${({ color }) => color && 0.8};
  }
  
  ${({ type, checked, color }) => [
    type === 'all' && css`
      background-color: ${color || "#007fff"};
      &::before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: block;
        width: 8px;
        height: 2px;
        background-color:#ffffff;
        content: '';
      }

      &:hover {
        background-color: ${color || "#3399ff"};
      }
    `,
    checked && css`
      background-color: ${color || "#007fff"};
      border: 1px solid ${color || "#007fff"};

      &:hover {
        background-color: ${color || "#3399ff"};
        border: 1px solid ${color || "#3399ff"};
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
  ${tw`ml-2 text-14 leading-20 text-monochrome-black`}
`;

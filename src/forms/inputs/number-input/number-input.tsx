import styled from 'styled-components';

import { Input } from '../input';
import { InputProps } from '../input-types';

export const NumberInput = ({ className, ...restProps }: InputProps) => (
  <div className={className}>
    <InputElement {...restProps} />
  </div>
);

const InputElement = styled(Input)`
  input {
    width: 60px;
    height: 40px;
    padding: 0 8px;

    -moz-appearance: textfield;

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;

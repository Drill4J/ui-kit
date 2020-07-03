import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';
import { InputProps } from '../input-types';
import { Input } from '../input';

import styles from './number-input.module.scss';

const numberInput = BEM(styles);

export const NumberInput = numberInput(({
  className, ...restProps
}: InputProps) => (
  <div className={className}>
    <InputElement {...restProps} />
  </div>
));

const InputElement = numberInput.inputElement(Input);

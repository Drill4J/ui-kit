import * as React from 'react';
import { BEM, input as bemInput } from '@redneckz/react-bem-helper';

import { INPUT_PROPS } from './input-props';
import { InputProps } from './input-types';

import styles from './input.module.scss';

const input = BEM(styles);

const INPUT_PROPS_OBJ = Object.assign({}, ...INPUT_PROPS.map((key) => ({ [key]: undefined })));

export const Input = input(({ className, icon, ...restProps }: InputProps) => (
  <div className={className}>
    {icon && <IconWrapper>{icon}</IconWrapper>}
    <InputElement {...restProps} />
  </div>
));

const InputElement = input.inputElement(
  bemInput({
    ...INPUT_PROPS_OBJ,
    value: '',
  } as {}),
);
const IconWrapper = input.iconWrapper('div');

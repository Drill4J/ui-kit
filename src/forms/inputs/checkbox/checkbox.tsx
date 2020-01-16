import * as React from 'react';
import { BEM, input } from '@redneckz/react-bem-helper';

import { Icons } from 'components';
import { CheckboxProps } from './checkbox-types';

import styles from './checkbox.module.scss';

const checkbox = BEM(styles);

export const Checkbox = checkbox(({
  className, onChange, checked, label, value,
}: CheckboxProps) => {
  const handleOnChange = () => {
    onChange
      && onChange({
        target: {
          type: 'checkbox',
          checked: !checked,
        },
      });
  };
  return (
    <div className={className} onClick={handleOnChange}>
      <CheckboxInput name={value} checked={checked} />
      <IconWrapper>
        <Icons.Checkbox />
      </IconWrapper>
      <Label>{label}</Label>
    </div>
  );
});

const CheckboxInput = checkbox.input(
  input({ type: 'checkbox', checked: false, name: '' } as {
    type?: string;
    checked?: boolean;
    name?: string;
  }),
);
const IconWrapper = checkbox.iconWrapper('div');
const Label = checkbox.label('div');

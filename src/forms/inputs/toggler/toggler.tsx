import { BEM } from '@redneckz/react-bem-helper';

import { Input } from '../input';

import { TogglerProps } from './toggler-types';

import styles from './toggler.module.scss';

const checkbox = BEM(styles);

export const Toggler = checkbox(
  ({
    className, label, value, onChange = () => {},
  }: TogglerProps) => (
    <label className={className}>
      <CheckboxInput type="checkbox" checked={Boolean(value)} value={value} onChange={onChange} />
      <CheckboxTogglerLabel />
      {label && <Label checked={Boolean(value)}>{label}</Label>}
    </label>
  ),
);

const CheckboxInput = checkbox.input(Input);
const CheckboxTogglerLabel = checkbox.slider('span');
const Label = checkbox.label('div');

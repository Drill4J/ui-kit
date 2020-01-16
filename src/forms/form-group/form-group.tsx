import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Panel } from '../../layouts';

import styles from './form-group.module.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  optional?: boolean;
  actions?: React.ReactNode;
}

const formGroup = BEM(styles);

export const FormGroup = formGroup(({
  className, children, label, optional, actions,
}: Props) => (
  <div className={className}>
    <Panel align="space-between">
      <Label>{label}</Label>
      <div>
        <Panel>
          {optional && <OptionalLabel>Optional</OptionalLabel>}
          {actions && <Actions>{actions}</Actions>}
        </Panel>
      </div>
    </Panel>
    <Input>{children}</Input>
  </div>
));

const Label = formGroup.label('label');
const OptionalLabel = formGroup.optionalLabel('span');
const Actions = formGroup.actions('div');
const Input = formGroup.input('div');

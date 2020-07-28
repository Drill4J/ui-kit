import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import styles from './auxiliary-progress-bar.module.scss';

interface Props {
  className?: string;
  value: string;
  type?: 'PRIMARY' | 'SECONDARY';
  testContext?: string;
}

const auxiliaryProgressBar = BEM(styles);

export const AuxiliaryProgressBar = auxiliaryProgressBar(({
  className, value, type, testContext,
}: Props) => (
  <div className={className} data-test={`auxiliary-progress-bar:${(testContext || type)}`}>
    <Progress style={{ width: value }} type={type} />
  </div>
));

const Progress = auxiliaryProgressBar.progress('div');

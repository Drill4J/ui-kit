import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import styles from './progress-bar.module.scss';

interface Props {
  className?: string;
  value: string;
  type?: 'OVERLAPPING' | 'SCOPE';
}

const progressBar = BEM(styles);

export const ProgressBar = progressBar(({
  className, value, type,
}: Props) => (
  <div className={className}>
    <Progress style={{ width: value }} type={type} />
  </div>
));

const Progress = progressBar.progress('div');

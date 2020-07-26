import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import styles from './main-progress-bar.module.scss';

interface Props {
  className?: string;
  value: string;
  type?: 'primary' | 'secondary';
  testContext?: string;
}

const mainProgressBar = BEM(styles);

export const MainProgressBar = mainProgressBar(({
  className, value, type, testContext,
}: Props) => (
  <div className={className} data-test={`main-progress-bar:${(testContext || type)}`}>
    <Progress style={{ width: value }} type={type} />
  </div>
));

const Progress = mainProgressBar.progress('div');

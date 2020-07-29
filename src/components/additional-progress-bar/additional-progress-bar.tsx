import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import styles from './additional-progress-bar.module.scss';

interface Props {
  className?: string;
  value: string;
  type?: 'primary' | 'secondary';
  testContext?: string;
}

const additionalProgressBar = BEM(styles);

export const AdditionalProgressBar = additionalProgressBar(({
  className, value, type, testContext,
}: Props) => (
  <div className={className} data-test={`additional-progress-bar:${(testContext || type)}`}>
    <Progress style={{ width: value }} type={type} />
  </div>
));

const Progress = additionalProgressBar.progress('div');

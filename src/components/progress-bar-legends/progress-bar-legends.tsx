import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Panel } from '../../layouts';

import styles from './progress-bar-legends.module.scss';

interface Props {
  className?: string;
}

const progressBarLegends = BEM(styles);

export const ProgressBarLegends = progressBarLegends(({
  className,
}: Props) => (
  <div className={className}>
    <Panel align="space-between">
      <Legend><Percentage type="start">0</Percentage></Legend>
      <Legend><Percentage>25</Percentage></Legend>
      <Legend><Percentage>50</Percentage></Legend>
      <Legend><Percentage>75</Percentage></Legend>
      <Legend><Percentage type="end">100</Percentage></Legend>
    </Panel>
  </div>
));

const Legend = progressBarLegends.legend('div');
const Percentage = progressBarLegends.percentage('div');

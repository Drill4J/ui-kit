import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import styles from './legend.module.scss';

interface LegendItem {
  color: string;
  label: React.ReactNode;
}

interface Props {
  className?: string;
  legendItems: LegendItem[];
}

const legend = BEM(styles);

export const Legend = legend(({ className, legendItems }: Props) => (
  <span className={className}>
    {legendItems.map(({ color, label }) => (
      <span key={color}>
        <Circle width={8} height={8}>
          <circle cx="4" cy="4" r="4" fill={color} />
        </Circle>
        {label}
      </span>
    ))}
  </span>
));

const Circle = legend.circle('svg');

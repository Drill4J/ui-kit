import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Icons } from '../icon';

import styles from './sort-arrow.module.scss';

interface Props {
  className?: string;
  order: 'ASC' | 'DESC' | null;
  active?: boolean;
}

const sortArrow = BEM(styles);

export const SortArrow = sortArrow(({ className, order }: Props) => (
  <div className={className}>
    <Icons.SortingArrow rotate={order === 'ASC' ? 180 : 0} />
  </div>
));

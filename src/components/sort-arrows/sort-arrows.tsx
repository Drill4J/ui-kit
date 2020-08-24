import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Icons } from '../icon';

import styles from './sort-arrows.module.scss';

interface Props {
  className?: string;
  onClick?: () => void;
  order: 'ASC' | 'DESC';
}

const sortArrows = BEM(styles);

export const SortArrows = sortArrows(({
  className, onClick, order,
}: Props) => (
  <div className={className} onClick={onClick}>
    <SortArrowWrapper>
      <SortArrow active={order === 'ASC'} rotate={180} />
      <SortArrow active={order === 'DESC'} />
    </SortArrowWrapper>
  </div>
));

const SortArrowWrapper = sortArrows.sortArrowWrapper('div');
const SortArrow: React.FC<{
  active: boolean;
  rotate?: number;
}> = sortArrows.sortArrow(Icons.SortingArrow);

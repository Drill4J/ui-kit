import * as React from 'react';
import { BEM, div } from '@redneckz/react-bem-helper';

import { Icons } from '../icon';

import styles from './sort-arrows.module.scss';

interface Props {
  className?: string;
  order: 'ASC' | 'DESC' | null;
}

const sortArrows = BEM(styles);

export const SortArrows = sortArrows(({ className, order }: Props) => (
  <div className={className}>
    <SortArrowsWrapper>
      <SortArrow active={order === 'ASC'}>
        <Icons.SortingArrow rotate={180} />
      </SortArrow>
      <SortArrow active={order === 'DESC'}>
        <Icons.SortingArrow />
      </SortArrow>
    </SortArrowsWrapper>
  </div>
));

const SortArrowsWrapper = sortArrows.sortArrowsWrapper('div');
const SortArrow = sortArrows.sortArrow(div({} as { active: boolean }));

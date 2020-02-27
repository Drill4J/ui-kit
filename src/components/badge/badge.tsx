import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import styles from './badge.module.scss';

interface Props {
  className?: string;
  children?: React.ReactNode;
  bold?: boolean;
  color?: 'green' | 'yellow' | 'gray' | 'red';
}

const badge = BEM(styles);

export const Badge = badge(({ className, children }: Props) => (
  <span className={className}>{children}</span>
));

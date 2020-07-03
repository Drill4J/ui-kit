import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import { Button } from '../button';

import styles from './negative-action-button.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'large' | 'small';
  disabled?: boolean;
  'data-test'?: string;
}

const negativeActionButton = BEM(styles);

export const NegativeActionButton = negativeActionButton(({ className, children, ...rest }: Props) => (
  <Button className={className} {...rest}>
    {children}
  </Button>
));

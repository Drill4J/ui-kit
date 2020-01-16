import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import styles from './stories-decorator.module.scss';

const storiesDecorator = BEM(styles);

interface Props {
  className?: string;
  children?: React.ReactNode | React.ReactNode [];
}

export const StoriesDecorator = storiesDecorator(({ className, children }: Props) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
});

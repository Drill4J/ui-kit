import { BEM } from '@redneckz/react-bem-helper';

import { Button } from '../button';

import styles from './cancel-button.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'large' | 'small';
  disabled?: boolean;
  'data-test'?: string;
}

const cancelButton = BEM(styles);

export const CancelButton = cancelButton(({ className, children, ...rest }: Props) => (
  <Button className={className} {...rest}>
    {children}
  </Button>
));

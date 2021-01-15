import { BEM } from '@redneckz/react-bem-helper';

import { Button } from '../button';

import styles from './link-button.module.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'large' | 'small';
  disabled?: boolean;
  'data-test'?: string;
}

const linkButton = BEM(styles);

export const LinkButton = linkButton(({ className, children, ...rest }: Props) => (
  <Button className={className} {...rest}>
    {children}
  </Button>
));

import { BEM } from '@redneckz/react-bem-helper';

import styles from './status.module.scss';

interface Props {
  className?: string;
  children?: string;
  testContext?: string;
}

const status = BEM(styles);

export const Status = status(({ className, children, testContext = 'data-test' }: Props) => (
  <div className={className} data-test={`status:${testContext}`}>{children}</div>
));

import { BEM } from '@redneckz/react-bem-helper';

import { path } from './path';

import styles from './striped-progress-bar.module.scss';

interface Props {
  className?: string;
  value?: string;
  type: 'primary' | 'secondary';
}

const stripedProgressBar = BEM(styles);

export const StripedProgressBar = stripedProgressBar(({ className, value, type }: Props) => (
  <svg className={className} type={type} width={value} height="12" data-test={`striped-progress-bar:${type}`}>
    <path
      d={path}
      fillRule="nonzero"
      stroke="none"
      strokeWidth="1"
      strokeDashoffset={value}
    >
      <animateTransform
        attributeName="transform"
        type="translate"
        from="-100"
        to="1"
        additive="replace"
        dur="5"
        repeatCount="indefinite"
      />
    </path>
  </svg>
));

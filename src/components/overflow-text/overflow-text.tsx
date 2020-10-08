import * as React from 'react';
import { BEM } from '@redneckz/react-bem-helper';

import styles from './overflow-text.module.scss';

export interface Props {
  className?: string;
  children: string;
}

const overflowText = BEM(styles);

export const OverflowText = overflowText(({ className, children }: Props) => {
  const messageRef = React.useRef<HTMLDivElement>(null);
  const [hint, setHint] = React.useState<string | null>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => (!entry.isIntersecting ? setHint(children) : setHint(null)),
      {
        root: null,
        threshold: 1.0,
      },
    );

    messageRef.current && observer.observe(messageRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={className} data-title={hint}>
      <Wrapper>
        <span ref={messageRef}>{children}</span>
      </Wrapper>
    </div>
  );
});

const Wrapper = overflowText.wrapper('span');

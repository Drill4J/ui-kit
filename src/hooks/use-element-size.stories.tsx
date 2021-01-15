import { FC, useRef } from 'react';
import { storiesOf } from '@storybook/react';

import { useElementSize } from './use-element-size';

const Component: FC = () => {
  const node = useRef<HTMLDivElement>(null);
  const { width: contentWidth, height: contentHeight } = useElementSize(node);

  return (
    <div ref={node} style={{ display: 'inline-block' }}>
      <textarea placeholder={`width: ${contentWidth} and height: ${contentHeight}`} />
    </div>
  );
};

storiesOf('Component with hook - useElementSize', module).add('Work exapmle useElementSize', () => (
  <Component />
));

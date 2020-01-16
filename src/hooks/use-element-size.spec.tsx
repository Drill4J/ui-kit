import React from 'react';
import renderer from 'react-test-renderer';

import { useElementSize } from './use-element-size';

const Component: React.FC = () => {
  const node = React.useRef<HTMLDivElement>(null);
  const { width: contentWidth, height: contentHeight } = useElementSize(node);

  return (
    <div ref={node} style={{ display: 'inline-block' }}>
      <textarea placeholder={`width: ${contentWidth} and height: ${contentHeight}`} />
    </div>
  );
};

describe('useElementSize', () => {
  it('should match snapshot', () => {
    const component = renderer
      .create(
        <Component />,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});

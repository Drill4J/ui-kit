import React from 'react';
import renderer from 'react-test-renderer';

import { Badge } from './badge';

describe('Badge', () => {
  it('should match snapshot with simple text', () => {
    const tree = renderer.create(<Badge text="simple" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with bold text', () => {
    const tree = renderer.create(<Badge text="bold" bold />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import { Badge } from './badge';

describe('Badge', () => {
  it('should match snapshot with simple text', () => {
    const tree = renderer.create(<Badge color="green">Online</Badge>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot with bold text', () => {
    const tree = renderer.create(<Badge color="green" bold>Online</Badge>).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

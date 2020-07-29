import React from 'react';
import renderer from 'react-test-renderer';

import { SessionIndicator } from './session-indicator';

describe('SessionIndicator', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<SessionIndicator active />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

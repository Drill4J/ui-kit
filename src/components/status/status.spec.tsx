import React from 'react';
import renderer from 'react-test-renderer';

import { Status } from './status';

describe('Status', () => {
  it('should match snapshot with simple text', () => {
    const tree = renderer.create(<Status>Online</Status>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

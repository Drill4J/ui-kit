import React from 'react';
import renderer from 'react-test-renderer';

import { FilledBadge } from './filled-badge';

it('renders correctly', () => {
  const tree = renderer.create(<FilledBadge />).toJSON();
  
  expect(tree).toMatchSnapshot();
});
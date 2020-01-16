import React from 'react';
import renderer from 'react-test-renderer';

import { Badge } from './badge';

it('renders correctly', () => {
  const tree = renderer.create(<Badge text="simple" />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('renders correctly with bold', () => {
  const tree = renderer.create(<Badge text="simple" bold />).toJSON();

  expect(tree).toMatchSnapshot();
});

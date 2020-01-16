import React from 'react';
import renderer from 'react-test-renderer';

import { Badge } from './badge';

it('should match snapshot', () => {
  const tree = renderer.create(<Badge text="simple" />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('should match snapshot with bold', () => {
  const tree = renderer.create(<Badge text="bold" bold />).toJSON();

  expect(tree).toMatchSnapshot();
});

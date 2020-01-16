import React from 'react';
import renderer from 'react-test-renderer';

import { Divider } from './divider';

it('should match snapshot', () => {
  const tree = renderer.create(<Divider />).toJSON();

  expect(tree).toMatchSnapshot();
});

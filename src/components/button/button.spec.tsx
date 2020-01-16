import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './button';

it('renders correctly', () => {
  const tree = renderer.create(<Button type="primary" size="large">Primary large</Button>).toJSON();
  
  expect(tree).toMatchSnapshot();
});

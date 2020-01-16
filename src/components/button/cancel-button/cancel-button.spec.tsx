import React from 'react';
import renderer from 'react-test-renderer';

import { CancelButton } from './cancel-button';

it('renders correctly', () => {
  const tree = renderer.create(<CancelButton size="large">Cancel button</CancelButton>).toJSON();
  
  expect(tree).toMatchSnapshot();
});
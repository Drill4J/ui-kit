import React from 'react';
import renderer from 'react-test-renderer';

import { NegativeActionButton } from './negative-action-button';

it('should match snapshot', () => {
  const tree = renderer.create(<NegativeActionButton size="large">Cancel button</NegativeActionButton>).toJSON();

  expect(tree).toMatchSnapshot();
});

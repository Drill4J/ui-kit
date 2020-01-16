import React from 'react';
import renderer from 'react-test-renderer';

import { LinkButton } from './link-button';

it('should match snapshot', () => {
  const tree = renderer.create(<LinkButton size="large">Link button</LinkButton>).toJSON();

  expect(tree).toMatchSnapshot();
});

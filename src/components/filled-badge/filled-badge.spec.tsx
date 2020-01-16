import React from 'react';
import renderer from 'react-test-renderer';

import { FilledBadge } from './filled-badge';

it('should match snapshot', () => {
  const tree = renderer.create(<FilledBadge>Filled badge</FilledBadge>).toJSON();

  expect(tree).toMatchSnapshot();
});

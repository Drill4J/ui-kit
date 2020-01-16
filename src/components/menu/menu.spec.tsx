import React from 'react';
import renderer from 'react-test-renderer';

import { Menu } from './menu';

it('should match snapshot', () => {
  const tree = renderer.create(<Menu
    items={[
      {
        label: 'Rename',
        icon: 'Edit',
        onClick: () => {},
      },
    ]}
  />).toJSON();

  expect(tree).toMatchSnapshot();
});

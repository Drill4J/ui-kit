import React from 'react';
import renderer from 'react-test-renderer';

import { Menu } from './menu';

it('renders correctly', () => {
  const tree = renderer.create(<Menu
    items={[
      {
        label: 'Rename',
        icon: 'Edit',
        onClick: () => alert('Hello world'),
      },
    ]}
  />).toJSON();
  
  expect(tree).toMatchSnapshot();
});
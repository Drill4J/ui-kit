import React from 'react';
import renderer from 'react-test-renderer';

import { Tooltip } from './tooltip';

it('renders correctly', () => {
  const tree = renderer.create(
    <Tooltip
      position="bottom"
      message={(
        <span>Tooltip</span>
      )}
    >
      <div>Tooltip</div>
    </Tooltip>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

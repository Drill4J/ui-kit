import React from 'react';
import renderer from 'react-test-renderer';

import { Panel } from './panel';

describe('Panel', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Panel>
        <span>Panel</span>
        <span>element</span>
      </Panel>
      ,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});

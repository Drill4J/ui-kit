import React from 'react';
import renderer from 'react-test-renderer';

import { AuxiliaryProgressBar } from './auxiliary-progress-bar';

describe('SecondaryProgressBar', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<AuxiliaryProgressBar value="50px" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

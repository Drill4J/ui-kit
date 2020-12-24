import React from 'react';
import renderer from 'react-test-renderer';

import { SortArrow } from './sort-arrow';

describe('SortArrows', () => {
  it('should match snapshot ascending sort-arrow', () => {
    const tree = renderer.create(<SortArrow order="ASC" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot descending sort-arrow', () => {
    const tree = renderer.create(<SortArrow order="DESC" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import { SortArrows } from './sort-arrows';

describe('SortArrows', () => {
  it('should match snapshot ascending sort-arrows', () => {
    const tree = renderer.create(<SortArrows sort="asc" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('should match snapshot descending sort-arrows', () => {
    const tree = renderer.create(<SortArrows sort="desc" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

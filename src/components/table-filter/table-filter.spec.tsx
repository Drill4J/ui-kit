import React from 'react';
import renderer from 'react-test-renderer';

import { TableFilter } from './table-filter';

describe('TableFilter', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <TableFilter
          filters={['New, Mod, Deleted']}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

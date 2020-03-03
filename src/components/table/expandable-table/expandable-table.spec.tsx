import React from 'react';
import renderer from 'react-test-renderer';

import { ExpandableTable } from './expandable-table';
import { Column } from '../column';

const data = [{
  id: '1',
  firstColumn: 'First column',
  secondColumn: 'Second column',
  name: 'first',
  firstLevelexpand: [{
    id: '1',
    firstColumn: 'First column',
    secondColumn: 'Second column',
    secondLevelExpand: [{
      id: '1',
      firstColumn: 'First column',
      secondColumn: 'Second column',
      name: 'first',
    }],
  }],
}, {
  id: '2',
  firstColumn: 'First column',
  secondColumn: 'Second column',
  name: 'second',
  firstLevelexpand: [{
    id: '2',
    firstColumn: 'First column',
    secondColumn: 'Second column',
    secondLevelExpand: [{
      id: '2',
      firstColumn: 'First column',
      secondColumn: 'Second column',
      name: 'second',
    }],
  }],
}];

describe('ExpandableTable', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <ExpandableTable
          data={data}
          idKey="name"
          expandedColumns={[
            <Column name="firstColumn" Cell={({ value }) => <span style={{ marginLeft: '30px' }}>{value}</span>} />,
            <Column name="secondColumn" />,
          ]}
          secondLevelExpand={[
            <Column name="firstColumn" Cell={(props) => <span style={{ marginLeft: '30px' }}>{...props}</span>} />,
            <Column name="secondColumn" />,
          ]}
          expandedContentKey="firstLevelexpand"
          hasSecondLevelExpand
        >
          <Column name="firstColumn" label="First column" />
          <Column name="secondColumn" label="Second column" />
        </ExpandableTable>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

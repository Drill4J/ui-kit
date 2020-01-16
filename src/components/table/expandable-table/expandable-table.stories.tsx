import React from 'react';
import { storiesOf } from '@storybook/react';

import { ExpandableTable } from './expandable-table';
import { Column } from '../column';

storiesOf('ExpandableTable', module).add('ExpandableTable', () => (
  <ExpandableTable
    data={[{
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
    }]}
    idKey="name"
    columnsSize="medium"
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
  </ExpandableTable>
));

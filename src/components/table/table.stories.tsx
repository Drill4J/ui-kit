import React from 'react';
import { storiesOf } from '@storybook/react';

import { Table } from './table';
import { Column } from './column';

const data = [{
  funcDefinition: 'function sum(a, b) { return a + b; };',
  funcExpression: 'const sum = function sum(a, b) { return a + b; };',
  anonymousFuncExpression: 'const sum = function(a, b) { return a + b; };',
  lambdaFunction: 'const sum = (a, b) => { return a + b; };',
  arrowFunction: 'const sum = (a, b) => (a + b);',
}];
const buildVersions = [
  {
    buildVersion: 'a',
    totalMethods: 97,
    newMethods: 97,
    modifiedMethods: 0,
    unaffectedMethods: 0,
    deletedMethods: 0,
  },
  {
    buildVersion: 'b',
    totalMethods: 107,
    newMethods: 10,
    modifiedMethods: 2,
    unaffectedMethods: 1,
    deletedMethods: 0,
  },
  {
    buildVersion: 'z',
    totalMethods: 107,
    newMethods: 50,
    modifiedMethods: 10,
    unaffectedMethods: 10,
    deletedMethods: 50,
  },
  {
    buildVersion: 'b',
    totalMethods: 1097,
    newMethods: 1000,
    modifiedMethods: 0,
    unaffectedMethods: 0,
    deletedMethods: 0,
  },
];
storiesOf('Table', module).add('Table', () => (
  <Table data={data}>
    <Column
      name="lambdaFunction"
      label="Lambda Function"
      Cell={({ value, item: { arrowFunction } }) => (
        <div>
          {value || arrowFunction}
        </div>
      )}
    />
    <Column
      name="funcDefinition"
      label="Func Definition"
      Cell={({ value }) => <div>{(value)}</div>}
    />
    <Column
      name="funcExpression"
      HeaderCell={() => (
        <div>Func Expression</div>
      )}
    />
    <Column
      name="anonymousFuncExpression"
      HeaderCell={() => (
        <div>Anonymous Func Expression</div>
      )}
    />
  </Table>
)).add('Build list table with sorting options', () => (
  <Table
    data={buildVersions}
    defaultSortField="buildVersion"
    combinedColumn={
      {
        name: 'Methods',
        columns: [
          <Column name="totalMethods" label="Total" />,
          <Column name="newMethods" label="New" />,
          <Column name="modifiedMethods" label="Modified" />,
          <Column name="unaffectedMethods" label="Unaffected" />,
          <Column name="deletedMethods" label="Deleted" />,
        ],
      }
    }
  >
    <Column
      name="buildVersion"
      label="Name"
      Cell={({ value }) => (
        <div style={{ margin: '16px', color: '#007FFF', fontFamily: 'OpenSans-Semibold, sans-serif' }}>
          {value}
        </div>
      )}
    />
  </Table>
));

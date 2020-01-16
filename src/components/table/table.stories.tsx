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
storiesOf('Table', module).add('Table', () => (
  <Table data={data}>
    <Column
      name="lambdaFunction"
      label="Lambda Function"
      Cell={({ value, item: { arrowFunction } }) => (
        <pre>
          {value || arrowFunction}
        </pre>
      )}
    />
    <Column
      name="funcDefinition"
      label="Func Definition"
      Cell={({ value }) => <pre>{(value)}</pre>}
    />
    <Column
      name="funcExpression"
      HeaderCell={() => (
        <pre>Func Expression</pre>
      )}
    />
    <Column
      name="anonymousFuncExpression"
      HeaderCell={() => (
        <pre>Anonymous Func Expression</pre>
      )}
    />
  </Table>
));

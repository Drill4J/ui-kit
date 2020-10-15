import React from 'react';
import { storiesOf } from '@storybook/react';

import { Table } from './table';
import { Column } from './column';
import { Icons } from '../icon';

const data = [{
  funcDefinition: 'function sum(a, b) { return a + b; };',
  funcExpression: 'const sum = function sum(a, b) { return a + b; };',
  anonymousFuncExpression: 'const sum = function(a, b) { return a + b; };',
  lambdaFunction: 'const sum = (a, b) => { return a + b; };',
  arrowFunction: 'const sum = (a, b) => (a + b);',
  icon: 'Arrow',
}];

storiesOf('Table', module).add('Table', () => {
  const [sort, setSort] = React.useState<{fieldName: string; order: 'ASC' | 'DESC'}>({ fieldName: 'name', order: 'ASC' });
  return (
    <Table
      data={data}
      sort={sort}
      onSort={setSort}
    >
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
        name="icon"
        label="Icons"
        Cell={({ value }: { value: keyof typeof Icons }) => {
          const CellIcon = Icons[value];
          return <CellIcon />;
        }}
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
  );
});

function invertOrder(order: 'ASC' | 'DESC') {
  return order === 'ASC' ? 'DESC' : 'ASC';
}

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Table } from './table';
import { Column } from './column';
import { Icons } from '../icon';
import { OverflowText } from '../overflow-text';

const data = [{
  funcDefinition: 'function sum(a, b) { return a + b; };',
  funcExpression: 'const sum = function sum(a, b) { return a + b; };',
  anonymousFuncExpression: 'const sum = function(a, b) { return a + b; };',
  lambdaFunction: 'const sum = (a, b) => { return a + b; };',
  arrowFunction: 'const sum = (a, b) => (a + b);',
  icon: 'Agent',
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
          <OverflowText>
            {value || arrowFunction}
          </OverflowText>
        )}
      />
      <Column
        name="icon"
        HeaderCell={() => <div>Icon</div>}
        Cell={({ value }: { value: keyof typeof Icons }) => {
          const CellIcon = Icons[value];
          return <CellIcon />;
        }}
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
          <pre>Anonymous Func Expression</pre>
        )}
        align="right"
      />
    </Table>
  );
});

import React from 'react';
import renderer from 'react-test-renderer';

import { SelectableTable } from './selectable-table';
import { Column } from './column';

describe('SelectableTable', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <SelectableTable
          data={[{
            funcDefinition: 'function sum(a, b) { return a + b; };',
            funcExpression: 'const sum = function sum(a, b) { return a + b; };',
            anonymousFuncExpression: 'const sum = function(a, b) { return a + b; };',
            lambdaFunction: 'const sum = (a, b) => { return a + b; };',
            arrowFunction: 'const sum = (a, b) => (a + b);',
          }]}
          idKey="selectableTable"
          selectedRows={
            ['lambdaFunction']
          }
          onSelect={() => {}}
        >
          <Column
            name="alias"
            label="Name"
            Cell={({ value, item: { buildVersion } }) => (
              <div
                onClick={() => {
                }}
              >
                {value || buildVersion}
              </div>
            )}
          />
          <Column
            name="addedDate"
            label="Added"
            Cell={({ value }) => <span>{(value)}</span>}
          />
          <Column
            name="totalMethods"
            HeaderCell={() => (
              <div>Total Methods</div>
            )}
          />
          <Column
            name="newMethods"
            HeaderCell={() => (
              <div>New</div>
            )}
          />
        </SelectableTable>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

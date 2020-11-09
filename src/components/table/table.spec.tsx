import React from 'react';
import renderer from 'react-test-renderer';

import { Table } from './table';
import { Column } from './column';

describe('Table', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Table
          data={[{
            buildVersion: '1658090997',
            addedDate: 1580285098638,
            totalMethods: 97,
            newMethods: 40,
          }]}
          sort={{ order: 'ASC', field: 'addedDate' }}
          onSort={() => {}}
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
        </Table>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

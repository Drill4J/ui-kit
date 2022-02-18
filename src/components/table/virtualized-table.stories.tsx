import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import 'twin.macro';

import { Icons } from '../icon';
import { Skeleton } from '../skeleton';
import { Stub } from '../stub';
import { Cells } from './cells';

import { VirtualizedTable } from './virtualized-table';

export default {
  component: VirtualizedTable,
  title: 'Components/VirtualizedTable',
};

const Template = (args: any) =>
  (
    <BrowserRouter>
      <div tw="h-full">
        <VirtualizedTable
          {...args}
          isLoading={false}
          data={Array.from({ length: 60 }, (_, i) => ({
            id: `[engine:junit-jupiter]/[class:api.standalone.StandaloneApiTest]/[method:junit5IgnoredTest()]:AUTO-${i}`,
            type: 'AUTO',
            name: `[engine:junit-jupiter]/[class:api.standalone.StandaloneApiTest]/[method:junit5IgnoredTest()]-${i}`,
            coverage: 50,
          }))}
          initialRowsCount={22}
        />
      </div>
    </BrowserRouter>
  );
export const BuildsTable = Template.bind({});

// @ts-ignore
BuildsTable.args = {
  stub: <Stub icon={<Icons.Class width={96} height={96} />} title="Tests table" message="Not Found" />,
  withSearch: true,
  isDefaulToggleSortBy: true,
  placeholder: 'Search packages by name',
  gridTemplateColumns: '2fr 1fr 1fr',
  renderHeader: (currentCount: number, totalCount: number) => (
    <div tw="flex justify-between text-monochrome-default text-14 leading-24 pb-3">
      <div tw="uppercase font-bold">{`Current (${currentCount})`}</div>
      <div>{`Displaying ${currentCount} of ${totalCount}`}</div>
    </div>
  ),
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
      textAlign: 'left',
      filterable: true,
      isCustomCell: true,
      width: '100%',
      Cell: ({ value = '', state }: any) => (value ? (
        <Cells.Compound
          cellName={value}
          cellAdditionalInfo="foo-bar"
          icon={<Icons.Function />}
        >
          <Cells.Highlight text={value} searchWords={state.filters.map((filter: {value: string}) => filter.value)} />
        </Cells.Compound>
      ) : <Skeleton withIcon withSubLine />),
    },
    {
      Header: 'Type',
      accessor: 'type',
      textAlign: 'left',
      width: '100%',
      Cell: ({ value = '' }: any) => (value ? (
        <Cells.Compound
          cellName={value}
          icon={<Icons.Class />}
        >
          {value}
        </Cells.Compound>
      ) : <Skeleton withIcon withSubLine />),
    },
    {
      Header: 'Coverage, %',
      accessor: 'coverage',
      textAlign: 'left',
      width: '100%',
      Cell: ({ value = '' }: any) => (value
        ? <Cells.Coverage value={value} />
        : <Skeleton />),
    },
  ],
};

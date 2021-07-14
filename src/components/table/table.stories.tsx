import 'twin.macro';

import { Table } from './table';

export default {
  component: Table,
  title: 'Components/table',
};


const Template = (args: any) => <Table {...args} />;

export const BuildsTable = Template.bind({});

// @ts-ignore
BuildsTable.args = {
  isDefaulToggleSortBy: true,
  columns: [
    {
      Header: 'Name',
      accessor: 'buildVersion',
      Cell: ({ value: buildVersion }: any) => (
        <div tw="grid gap-x-2 h-12 items-center font-bold text-14">
          <div tw="link text-ellipsis">{buildVersion}</div>
        </div>
      ),
      textAlign: 'left',
      width: '30%',
    },
    {
      Header: 'Added',
      accessor: 'detectedAt',
      Cell: ({ value }: any) => <span>{value}</span>,
      textAlign: 'left',
      width: '20%',
    },
    {
      Header: 'Total methods',
      accessor: 'summary.total',
      width: '10%',
    },
    {
      Header: 'New',
      accessor: 'summary.new',
      width: '10%',
    },
    {
      Header: 'Modified',
      accessor: 'summary.modified',
      width: '10%',
    },
    {
      Header: 'Unaffected',
      accessor: 'summary.unaffected',
      width: '10%',
    },
    {
      Header: 'Deleted',
      accessor: 'summary.deleted',
      width: '10%',
    },
  ],
  data: Array.from({ length: 208 }, (_, i) => ({
    buildVersion: `0.${i}.0`,
    detectedAt: Math.round(Math.random() * i),
    summary: null,
  })),
};

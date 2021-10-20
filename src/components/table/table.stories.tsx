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
  withSearch: true,
  isDefaulToggleSortBy: true,
  placeholder: 'Search packages by name',
  columns: [
    {
      Header: 'Class',
      accessor: 'testDetails.class',
      textAlign: 'left',
      filterable: true,
    },
    {
      Header: 'Engine',
      accessor: 'testDetails.engine',
      textAlign: 'left',
      filterable: true,
    },
    {
      Header: 'Methods',
      accessor: 'testDetails.methods',
      textAlign: 'left',
      filterable: true,
    },
    {
      Header: 'Params',
      accessor: 'testDetails.params',
      textAlign: 'left',
      filterable: true,
    },
  ],
  data: Array.from({ length: 200 }, (_, i) => ({
    id: `[engine:junit-jupiter]/[class:api.standalone.StandaloneApiTest]/[method:junit5IgnoredTest()]:AUTO-${i}`,
    type: 'AUTO',
    name: `[engine:junit-jupiter]/[class:api.standalone.StandaloneApiTest]/[method:junit5IgnoredTest()]-${i}`,
    toRun: false,
    coverage: {
      percentage: 0,
      methodCount: {
        covered: 0,
        total: 97,
      },
      count: {
        covered: 0,
        total: 828,
      },
    },
    testDetails: {
      engine: `junit-jupiter-${(Math.random() + 1).toString(36).substring(7)}`,
      class: `api.standalone.StandaloneApiTest-${(Math.random() + 1).toString(36).substring(7)}`,
      mathod: `junit5IgnoredTest-${(Math.random() + 1).toString(36).substring(7)}`,
      params: 'qwe-wwwe-qwe',
    },
    details: {
      duration: 0,
      result: 'SKIPPED',
      metadata: {
        hash: '',
        data: {},
      },
    },
  })),
};

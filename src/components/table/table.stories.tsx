import 'twin.macro';
import { Icons } from '../icon';
import { Stub } from '../stub';

import { Table } from './table';

export default {
  component: Table,
  title: 'Components/table',
};

const Template = (args: any) => <Table {...args} />;

export const BuildsTable = Template.bind({});

// @ts-ignore
BuildsTable.args = {
  stub: <Stub icon={<Icons.Class width={96} height={96} />} title="Tests table" message="Not Found" />,
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
      engine: `junit-jupiter-${i}`,
      class: `api.standalone.StandaloneApiTest-${i}`,
      mathod: `junit5IgnoredTest-${i}`,
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

import 'twin.macro';
import { Icons } from '../icon';
import { Stub } from '../stub';

import { VirtualizedTable } from './virtualized-table';

export default {
  component: VirtualizedTable,
  title: 'Components/table',
};

const Template = (args: any) => <VirtualizedTable {...args} />;

export const BuildsTable = Template.bind({});

// @ts-ignore
BuildsTable.args = {
  stub: <Stub icon={<Icons.Class width={96} height={96} />} title="Tests table" message="Not Found" />,
  withSearch: true,
  isDefaulToggleSortBy: true,
  placeholder: 'Search packages by name',
  name: 'app packages',
  columns: [
    {
      Header: 'Class',
      accessor: 'testDetails.class',
      textAlign: 'left',
      filterable: true,
      width: '100%',
    },
    {
      Header: 'Engine',
      accessor: 'testDetails.engine',
      textAlign: 'left',
      filterable: true,
      width: '100%',
    },
    {
      Header: 'Params',
      accessor: 'testDetails.params',
      textAlign: 'right',
      width: '100%',
    },
  ],
  data: Array.from({ length: 100 }, (_, i) => ({
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

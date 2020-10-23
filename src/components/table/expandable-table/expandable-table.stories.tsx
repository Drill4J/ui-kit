import React from 'react';
import { storiesOf } from '@storybook/react';

import { ExpandableTable } from './expandable-table';
import { Column } from '../column';

const data = [{
  id: 'test-pet-mcr',
  name: 'test-pet-mcr',
  description: '',
  environment: '',
  agents: [{
    id: 'admin-server',
    serviceGroup: 'test-pet-mcr',
    name: 'admin-server',
    description: 'admin-server',
    agentType: 'Java',
  }, {
    id: 'api-gateway',
    serviceGroup: 'test-pet-mcr',
    name: 'api-gateway',
    description: 'api-gateway',
    agentType: 'Java',
  }, {
    id: 'customers-service',
    serviceGroup: 'test-pet-mcr',
    name: 'customers-service',
    description: 'customers-service',
    agentType: 'Java',
  }, {
    id: 'discovery-server',
    serviceGroup: 'test-pet-mcr',
    name: 'discovery-server',
    description: 'discovery-server',
    agentType: 'Java',
  }, {
    id: 'hystrix-dashboard',
    serviceGroup: 'test-pet-mcr',
    name: 'hystrix-dashboard',
    description: 'hystrix-dashboard',
    agentType: 'Java',
  }, {
    id: 'vets-service',
    serviceGroup: 'test-pet-mcr',
    name: 'vets-service',
    description: 'vets-service',
    agentType: 'Java',
  }, {
    id: 'visits-service',
    serviceGroup: 'test-pet-mcr',
    name: 'visits-service',
    description: 'visits-service',
    agentType: 'Java',
  }],
  agentType: 'ServiceGroup',
}, {
  id: 'test-pet-standalone',
  serviceGroup: '',
  name: 'test-pet-standalone',
  description: 'test-pet-standalone',
  agentType: 'Java',
  agentVersion: '0.6.0-10',
}];

storiesOf('ExpandableTable', module).add('ExpandableTable', () => {
  const [sort, setSort] = React.useState<{fieldName: string; order: 'ASC' | 'DESC'}>({ fieldName: 'name', order: 'ASC' });
  return (
    <ExpandableTable
      data={data}
      idKey="id"
      sort={sort}
      onSort={setSort}
      expandedColumns={[
        <Column name="expander" Cell={() => null} />,
        <Column
          name="name"
          label="Name"
          Cell={({ value }) => <span style={{ marginLeft: '30px' }}>{value}</span>}
        />,
        <Column
          name="description"
          label="Description"
          Cell={({ value }) => <span>{value.substr(0, 150)}</span>}
        />,
        <Column name="agentType" label="Type" align="right" />,
      ]}
      expandedContentKey="agents"
    >
      <Column name="name" label="Name" width="10%" />
      <Column
        name="description"
        label="Description"
        width="20%"
      />
      <Column name="agentType" label="Type" align="right" />
    </ExpandableTable>
  );
});

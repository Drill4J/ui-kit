import React from 'react';
import { storiesOf } from '@storybook/react';

import { ExpandableTable } from './expandable-table';
import { Column } from '../column';
import { Icons } from '../../icon';

storiesOf('ExpandableTable', module).add('Expandable methods table ', () => (
  <ExpandableTable
    data={[{
      id: '-sadj724sdh',
      name: 'org/springframework/samples/petclinic',
      coverage: 120,
      totalClassesCount: 1,
      coveredClassesCount: 120,
      totalMethodsCount: 2,
      coveredMethodsCount: 120,
      assocTestsCount: 57,
      classes: [
        {
          id: 'vsml1i4kccll',
          name: 'PetClinicApplication',
          path: 'org/springframework/samples/petclinic/PetClinicApplication',
          coverage: 230,
          totalMethodsCount: 2,
          coveredMethodsCount: 120,
          methods: [
            {
              id: '3jx2yolhu16o',
              name: 'PetClinicApplication',
              desc: '()V',
              decl: '(): void',
              coverage: 320,
              assocTestsCount: 57,
            },
            {
              id: '-10s3rq7dwdfz4',
              name: 'main',
              desc: '([Ljava/lang/String;)V',
              decl: '(String[]): void',
              coverage: 120,
              assocTestsCount: 57,
            },
          ],
        },
      ],
    }]}
    idKey="name"
    expandedColumns={[
      <Column
        name="name"
        Cell={({ value }) => <span style={{ marginLeft: '30px' }}>{value}</span>}
      />,
      <Column name="coverage" />,
      <Column name="totalMethodsCount" />,
      <Column name="coveredMethodsCount" />,
      <Column
        name="assocTestsCount"
        label="Associated tests"
      />,
    ]}
    secondLevelExpand={[
      <Column
        name="name"
        Cell={({ value }) => (
          <div style={{
            display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '60px',
          }}
          >
            <Icons.Function />
            <div>{value}</div>
          </div>
        )}
        colSpan={2}
      />,
      <Column name="coverage" colSpan={3} />,
      <Column
        name="assocTestsCount"
        label="Associated tests"
      />,
    ]}
    expandedContentKey="classes"
    hasSecondLevelExpand
    defaultSortField="name"
  >
    <Column
      name="name"
      label="Name"
      Cell={({ value }) => (
        <span>
          <Icons.Package />
          <div>{value}</div>
        </span>
      )}
    />
    <Column name="coverage" label="Coverage" />
    <Column name="totalMethodsCount" label="Methods total" />
    <Column name="coveredMethodsCount" label="Methods covered" />
    <Column
      name="assocTestsCount"
      label="Associated tests"
    />
  </ExpandableTable>
));

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from './card';
import { Icons } from '../icon';

storiesOf('Card', module)
  .add('Build coverage cards', () => (
    <div style={{ display: 'grid', gridTemplateColumns: '204px 204px 204px 204px', gridGap: '8px' }}>
      <Card
        icon={<Icons.Total />}
        methods={{
          totalCount: 2000,
          coveredCount: 600,
          risksCount: 640,
          coveredFromTotalCount: 30,
          currentBuildCoverage: 40,
          overlappedCoverage: 5,
          activeScopeCoverage: 10,
          methodsType: 'ALL METHODS',
        }}
      />
      <Card
        icon={<Icons.Add />}
        methods={{
          totalCount: 300,
          coveredCount: 40,
          risksCount: 260,
          coveredFromTotalCount: 2,
          currentBuildCoverage: 50,
          overlappedCoverage: 10,
          activeScopeCoverage: 10,
          methodsType: 'NEW',
        }}
      />
      <Card
        icon={<Icons.Edit height={15} width={16} viewBox="0 0 15 16" />}
        methods={{
          totalCount: 500,
          coveredCount: 120,
          risksCount: 380,
          coveredFromTotalCount: 6,
          currentBuildCoverage: 35,
          overlappedCoverage: 8,
          activeScopeCoverage: 40,
          methodsType: 'MODIFIED',
        }}
      />
      <Card
        icon={<Icons.Unaffected />}
        methods={{
          totalCount: 1200,
          coveredCount: 440,
          risksCount: 0,
          coveredFromTotalCount: 22,
          currentBuildCoverage: 40,
          overlappedCoverage: 15,
          activeScopeCoverage: 45,
          methodsType: 'UNAFFECTED',
        }}
      />
    </div>
  ));

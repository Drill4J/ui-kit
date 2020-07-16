import React from 'react';
import { storiesOf } from '@storybook/react';

import { Card } from './card';

storiesOf('Card', module)
  .add('Build coverage cards', () => (
    <div style={{
      display: 'grid', gridTemplateColumns: '380px 250px 250px 250px', gridGap: '8px', margin: '16px 16px',
    }}
    >
      <Card
        methods={{
          totalCount: 2000,
          coveredCount: 740,
          methodsType: 'all methods',
        }}
      />
      <Card
        methods={{
          totalCount: 300,
          coveredCount: 40,
          risksCount: 260,
          methodsType: 'new',
        }}
      />
      <Card
        methods={{
          totalCount: 500,
          coveredCount: 120,
          risksCount: 380,
          methodsType: 'modified',
        }}
      />
      <Card
        methods={{
          totalCount: 12,
          coveredCount: 0,
          methodsType: 'deleted',
        }}
      />
    </div>
  ));

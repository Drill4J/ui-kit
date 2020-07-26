import React from 'react';
import { storiesOf } from '@storybook/react';

import { MainProgressBar } from './main-progress-bar';

storiesOf('MainProgressBar', module)
  .add('MainProgressBar with change coverage panel', () => {
    const [coverage, setCoverage] = React.useState(20);
    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setCoverage(Number(value));
    };
    return (
      <div style={{ display: 'grid', gap: '20px', padding: '40px' }}>
        <MainProgressBar value={`${coverage}%`} />
        <MainProgressBar value={`${coverage}%`} type="primary" />
        <MainProgressBar value={`${coverage}%`} type="secondary" />
        <input type="range" min="0" max="100" value={coverage} onChange={handleChange} />
      </div>
    );
  });

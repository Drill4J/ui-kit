import React from 'react';
import { storiesOf } from '@storybook/react';

import { StripedProgressBar } from './striped-progress-bar';

storiesOf('StripedProgressBar', module)
  .add('StripedProgressBar with change coverage panel', () => {
    const [coverage, setCoverage] = React.useState(0);
    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setCoverage(Number(value));
    };
    return (
      <div style={{ padding: '40px' }}>
        <div style={{
          display: 'grid', placeItems: 'center', width: '500px', height: ' 500px',
        }}
        >
          <StripedProgressBar value={`${coverage}%`} type="primary" />
        </div>
        <input type="range" min="0" max="100" value={coverage} onChange={handleChange} />
      </div>
    );
  });

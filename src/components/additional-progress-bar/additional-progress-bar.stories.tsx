import { ChangeEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';

import { AdditionalProgressBar } from './additional-progress-bar';

storiesOf('AdditionalProgressBar', module).add(
  'AdditionalProgressBar with change coverage panel',
  () => {
    const [coverage, setCoverage] = useState(0);
    const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setCoverage(Number(value));
    };
    return (
      <div style={{ display: 'grid', gap: '20px', padding: '40px' }}>
        <AdditionalProgressBar value={`${coverage}%`} />
        <AdditionalProgressBar value={`${coverage}%`} type="primary" />
        <AdditionalProgressBar value={`${coverage}%`} type="secondary" />
        <input type="range" min="0" max="100" value={coverage} onChange={handleChange} />
      </div>
    );
  },
);

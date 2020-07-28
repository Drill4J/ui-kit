import React from 'react';
import { storiesOf } from '@storybook/react';

import { AuxiliaryProgressBar } from './auxiliary-progress-bar';

storiesOf('AuxiliaryProgressBar', module)
  .add('AuxiliaryProgressBar with change coverage panel', () => {
    const [coverage, setCoverage] = React.useState(0);
    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setCoverage(Number(value));
    };
    return (
      <div style={{ display: 'grid', gap: '20px', padding: '40px' }}>
        <AuxiliaryProgressBar value={`${coverage}%`} />
        <AuxiliaryProgressBar value={`${coverage}%`} type="PRIMARY" />
        <AuxiliaryProgressBar value={`${coverage}%`} type="SECONDARY" />
        <input type="range" min="0" max="100" value={coverage} onChange={handleChange} />
      </div>
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react';

import { MultiProgressBar } from './multi-progress-bar';
import { Checkbox } from '../../forms/inputs/checkbox/checkbox';

storiesOf('MultiProgressBar', module)
  .add('MultiProgressBar with change coverage panel', () => {
    const [coverage, setCoverage] = React.useState({ coverage: 0, newCoverage: 0, overlappedCoverage: 0 });
    const [active, setActive] = React.useState(false);
    const handleCoverageChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setCoverage({ ...coverage, coverage: Number(value) });
    };
    const handleNewCoverageChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setCoverage({ ...coverage, newCoverage: Number(value) });
    };
    const handleOverlappedCoverageChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setCoverage({ ...coverage, overlappedCoverage: Number(value) });
    };

    return (
      <div style={{ padding: '100px' }}>
        <div style={{
          display: 'grid', gridGap: '40px', placeItems: 'center', width: '840px', height: ' 500px',
        }}
        >
          <MultiProgressBar
            value={coverage.coverage}
            newValue={coverage.newCoverage}
            overlappedValue={coverage.overlappedCoverage}
            active={active}
          />
          <Checkbox
            checked={active}
            label={active ? 'active' : 'not active'}
            onChange={() => (active ? setActive(false) : setActive(true))}
          />

          <input type="range" min="0" max="100" value={coverage.coverage} onChange={handleCoverageChange} />
          <span>
            Coverage:
            {coverage.coverage}
          </span>
          <input
            type="range"
            min="0"
            max={100 - coverage.coverage}
            value={coverage.newCoverage}
            onChange={handleNewCoverageChange}
          />
          <span>
            New Coverage:
            {coverage.newCoverage}
          </span>
          <input
            type="range"
            min="0"
            max={coverage.coverage}
            value={coverage.overlappedCoverage}
            onChange={handleOverlappedCoverageChange}
          />
          <span>
            Overlapping:
            {coverage.overlappedCoverage}
          </span>
        </div>
      </div>
    );
  });

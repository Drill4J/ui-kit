import React from 'react';
import { storiesOf } from '@storybook/react';

import { CircleDiagram } from './circle-diagram';

storiesOf('CircleDiagram', module)
  .add('CircleDiagram', () => {
    const [coverage, setCoverage] = React.useState(0);
    const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
      setCoverage(+value);
    };

    React.useEffect(() => {
      const interval = setInterval(() => {
        setCoverage(state => (state < 100 ? state + 10 : 0));
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }, []);
    return (
      <>
        <div>
          <CircleDiagram values={{
            coverage,
            diameter: 96,
            strokeWidth: 20,
          }}
          >
            <div style={{ width: '50px', fontSize: '11px' }}>
              <div>Counter</div>
              <div style={{ textAlign: 'center' }}>{coverage}</div>
            </div>
          </CircleDiagram>
          <input type="range" min="0" max="100" value={coverage} onChange={handleChange} />
        </div>
        <CircleDiagram values={{
          coverage,
          diameter: 400,
          strokeWidth: 10,
        }}
        >
          <span>Some text</span>
        </CircleDiagram>
      </>
    );
  });

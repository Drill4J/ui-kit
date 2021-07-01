import { ChangeEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { StripedProgressBar } from './striped-progress-bar';

storiesOf('StripedProgressBar', module).add('StripedProgressBar with change coverage panel', () => {
  const [coverage, setCoverage] = useState(0);
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setCoverage(Number(value));
  };
  return (
    <div tw="p-10">
      <div tw="grid place-items-center w-40 h-40">
        <StripedProgressBar value={`${coverage}%`} type="primary" />
        <br />
        <StripedProgressBar value={`${coverage}%`} type="secondary" />
      </div>
      <input type="range" min="0" max="100" value={coverage} onChange={handleChange} />
    </div>
  );
});

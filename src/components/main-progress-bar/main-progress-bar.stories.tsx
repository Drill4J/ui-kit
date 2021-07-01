import { ChangeEvent, useState } from 'react';
import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { MainProgressBar } from './main-progress-bar';

storiesOf('MainProgressBar', module).add('MainProgressBar with change coverage panel', () => {
  const [coverage, setCoverage] = useState(20);
  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setCoverage(Number(value));
  };
  return (
    <div tw="grid gap-5 p-10">
      <MainProgressBar value={`${coverage}%`} />
      <MainProgressBar value={`${coverage}%`} type="primary" />
      <MainProgressBar value={`${coverage}%`} type="secondary" />
      <input type="range" min="0" max="100" value={coverage} onChange={handleChange} />
    </div>
  );
});

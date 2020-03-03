import React from 'react';
import { storiesOf } from '@storybook/react';

import { SortArrows } from './sort-arrows';

storiesOf('SortArrows', module).add('SortArrows', () => {
  const [sort, setSort] = React.useState('asc');
  return <SortArrows sort={sort as any} onClick={() => (sort === 'asc' ? setSort('desc') : setSort('asc'))} />;
});

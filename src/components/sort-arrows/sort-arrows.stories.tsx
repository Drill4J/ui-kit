import React from 'react';
import { storiesOf } from '@storybook/react';

import { SortArrows } from './sort-arrows';

storiesOf('SortArrows', module).add('SortArrows', () => {
  const [sort, setSort] = React.useState<'ASC' | 'DESC'>('ASC');
  return <SortArrows order={sort} onClick={() => (sort === 'ASC' ? setSort('DESC') : setSort('ASC'))} />;
});

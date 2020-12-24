import React from 'react';
import { storiesOf } from '@storybook/react';

import { SortArrow } from './sort-arrow';

storiesOf('SortArrow', module).add('SortArrow', () => {
  const [order, setOrder] = React.useState<'ASC' | 'DESC'>('ASC');
  return (
    <div onClick={() => setOrder(order === 'ASC' ? 'DESC' : 'ASC')}>
      <SortArrow order={order} />
    </div>
  );
});

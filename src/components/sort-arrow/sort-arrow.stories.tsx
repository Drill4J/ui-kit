import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { SortArrow } from './sort-arrow';

storiesOf('SortArrow', module).add('SortArrow', () => {
  const [order, setOrder] = useState<'ASC' | 'DESC'>('ASC');
  return (
    <div onClick={() => setOrder(order === 'ASC' ? 'DESC' : 'ASC')}>
      <SortArrow order={order} />
    </div>
  );
});

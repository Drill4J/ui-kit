import { storiesOf } from '@storybook/react';

import { TableFilter } from './table-filter';

storiesOf('TableFilter', module).add('Filter with checkboxes',
  () => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TableFilter filters={['New', 'Deleted', 'Mod', 'Unaffected', '5', '6', '7', '8', 'more8']} />
    </div>
  ));

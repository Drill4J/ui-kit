import { storiesOf } from '@storybook/react';

import { Status } from './status';

storiesOf('Status', module)
  .add('with simple and bold text', () => (
    <>
      <div style={{ color: '#00B602' }}>
        <Status>Active</Status>
      </div>
      <div style={{ color: '#687481' }}>
        <Status>Ignored</Status>
      </div>
      <div style={{ color: '#ee0000' }}>
        <Status />
      </div>
    </>
  ));

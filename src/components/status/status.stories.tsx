import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Status } from './status';

storiesOf('Status', module)
  .add('with simple and bold text', () => (
    <>
      <div tw="text-green-default">
        <Status>Active</Status>
      </div>
      <div tw="text-red-default">
        <Status>Ignored</Status>
      </div>
      <div tw="text-blue-medium-tint">
        <Status />
      </div>
    </>
  ));

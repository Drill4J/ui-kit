import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './button';
import { CancelButton } from './cancel-button/cancel-button';
import { LinkButton } from './link-button/link-button';

storiesOf('Button', module)
  .add('types of buttons', () => (
    <div style={{ display: 'inline-grid', gridGap: '20px' }}>
      <Button type="primary" size="large">
        Primary large
      </Button>
      <Button type="secondary" size="small">
        Secondary small
      </Button>
      <CancelButton size="large">Cancel button large</CancelButton>
      <CancelButton size="small">Cancel button small</CancelButton>
      <LinkButton size="large">Link button large</LinkButton>
      <LinkButton size="small">Link button small</LinkButton>
    </div>
  ));

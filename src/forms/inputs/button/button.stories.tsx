import React from 'react';
import { storiesOf } from '@storybook/react';

import { Button } from './button';
import { CancelButton } from './cancel-button';
import { LinkButton } from './link-button';
import { NegativeActionButton } from './negative-action-button';

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
      <NegativeActionButton size="large">Negative action button large</NegativeActionButton>
      <NegativeActionButton size="small">Negative action button small</NegativeActionButton>
    </div>
  ));

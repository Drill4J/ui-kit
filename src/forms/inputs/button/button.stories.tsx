import { storiesOf } from '@storybook/react';

import { Button } from './button';
import { CancelButton } from './cancel-button';
import { LinkButton } from './link-button';
import { NegativeActionButton } from './negative-action-button';

storiesOf('Button', module).add('types of buttons', () => (
  <div style={{ display: 'grid', gridGap: '20px', placeItems: 'center' }}>
    <Button kind="primary" size="large">
      Primary large
    </Button>
    <Button kind="primary" size="small">
      Primary small
    </Button>
    <Button kind="secondary" size="large">
      Secondary large
    </Button>
    <Button kind="secondary" size="small">
      Secondary small
    </Button>
    <Button kind="primary" size="large">
      <span>Primary large</span>
    </Button>
    <Button kind="secondary" size="small">
      <span>Secondary small</span>
    </Button>
    <CancelButton size="large">Cancel button large</CancelButton>
    <CancelButton size="small">Cancel button small</CancelButton>
    <LinkButton size="large">Link button large</LinkButton>
    <LinkButton size="small">Link button small</LinkButton>
    <NegativeActionButton size="large">Negative action button large</NegativeActionButton>
    <NegativeActionButton size="small">Negative action button small</NegativeActionButton>
  </div>
));

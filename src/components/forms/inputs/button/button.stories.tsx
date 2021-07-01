import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { Button } from './button';
import { CancelButton } from './cancel-button';
import { LinkButton } from './link-button';
import { NegativeActionButton } from './negative-action-button';

storiesOf('Button', module).add('types of buttons', () => (
  <div tw="space-y-5">
    <Button primary size="large">
      Primary large
    </Button>
    <Button primary size="small">
      Primary small
    </Button>
    <Button secondary size="large">
      Secondary large
    </Button>
    <Button secondary size="small">
      Secondary small
    </Button>
    <Button primary size="large">
      <span>Primary large</span>
    </Button>
    <Button secondary size="small">
      <span>Secondary small</span>
    </Button>
    <CancelButton size="large">Cancel button large</CancelButton>
    <CancelButton size="small">Cancel button small</CancelButton>
    <div tw="flex flex-col">
      <LinkButton size="large">Link button large</LinkButton>
      <LinkButton size="small">Link button small</LinkButton>
    </div>
    <NegativeActionButton size="large">Negative action button large</NegativeActionButton>
    <NegativeActionButton size="small">Negative action button small</NegativeActionButton>
  </div>
));

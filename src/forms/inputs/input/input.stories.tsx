import React from 'react';
import { storiesOf } from '@storybook/react';

import { Input } from './input';
import { Icons } from '../../../components/icon';

storiesOf('Input', module).add('Input types', () => (
  <>
    <h3>Simple input</h3>
    <Input
      icon={<Icons.Account />}
      placeholder="enter text..."
      prefix
    />
    <h3>Rounded input</h3>
    <Input
      placeholder="enter text..."
      rounded
    />
    <h3>Disabled input</h3>
    <Input
      placeholder="enter text..."
      disabled
    />
    <h3>Success input</h3>
    <Input
      placeholder="enter text..."
      success
    />
    <h3>Error input</h3>
    <Input
      placeholder="enter text..."
      error
    />
  </>
));

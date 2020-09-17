import React from 'react';
import { storiesOf } from '@storybook/react';

import { Textarea } from './textarea';

storiesOf('Textarea', module).add('Textarea', () => (
  <div style={{
    margin: '40px', height: '200px', width: '400px',
  }}
  >
    <Textarea value="Textarea" onChange={() => {}} />
    <Textarea value="Textarea disabled" disabled onChange={() => {}} />
    <Textarea value="Incorrect value" error onChange={() => {}} />
  </div>
));

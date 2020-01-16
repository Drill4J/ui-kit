import React from 'react';
import { storiesOf } from '@storybook/react';

import { MessagePanel } from './message-panel';

storiesOf('MessagePanel', module)
  .add('SUCCESS', () => (
    <MessagePanel message={{ type: 'SUCCESS', text: 'Succes! Congratz!' }} onClose={() => {}} />
  ))
  .add('ERROR', () => (
    <MessagePanel message={{ type: 'ERROR', text: 'ERROR! Something went wrong!' }} onClose={() => {}} />
  ))
  .add('WARNING', () => (
    <MessagePanel message={{ type: 'WARNING', text: 'WARNING! Something might go wrong!' }} onClose={() => {}} />
  ))
  .add('INFO', () => (
    <MessagePanel message={{ type: 'INFO', text: 'INFO! This should be read!' }} onClose={() => {}} />
  ));

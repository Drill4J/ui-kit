import React from 'react';
import { storiesOf } from '@storybook/react';

import { MessagePanel } from './message-panel';
import { LinkButton } from '../../forms/inputs/button';
import { Panel } from '../../layouts';

storiesOf('MessagePanel', module)
  .add('SUCCESS', () => (
    <MessagePanel message={{ type: 'SUCCESS', text: 'Succes! Congratz!' }} onClose={() => {}} />
  ))
  .add('ERROR', () => (
    <MessagePanel message={{ type: 'ERROR', text: 'ERROR! Something went wrong!' }} onClose={() => {}} />
  ))
  .add('WARNING', () => (
    <MessagePanel
      message={{
        type: 'WARNING',
        text: (
          <Panel>
            WARNING! Something might go wrong!&nbsp;
            <LinkButton size="large">Undo</LinkButton>
          </Panel>),
      }}
      onClose={() => {}}
    />
  ))
  .add('INFO', () => (
    <MessagePanel message={{ type: 'INFO', text: 'INFO! This should be read!' }} onClose={() => {}} />
  ));

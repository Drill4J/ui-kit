import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { MessagePanel } from './message-panel';
import { LinkButton } from '../forms';

storiesOf('MessagePanel', module)
  .add('SUCCESS', () => (
    <MessagePanel message={{ type: 'SUCCESS', text: 'Succes! Congratz!' }} onClose={() => {}} />
  ))
  .add('ERROR', () => (
    <MessagePanel message={{ type: 'ERROR', text: 'Error! Something went wrong!' }} onClose={() => {}} />
  ))
  .add('WARNING', () => (
    <MessagePanel
      message={{
        type: 'WARNING',
        text: (
          <div tw="flex items-center w-full">
            Warning! Something might go wrong!&nbsp;
            <LinkButton size="large">Undo</LinkButton>
          </div>
        ),
      }}
      onClose={() => {}}
    />
  ))
  .add('INFO', () => (
    <MessagePanel message={{ type: 'INFO', text: 'Info! This should be read!' }} onClose={() => {}} />
  ));

import React from 'react';
import { storiesOf } from '@storybook/react';

import { Panel } from './panel';

storiesOf('Panel', module).add('Panel', () => (
  <>
    <h1>Panel Align center</h1>
    <Panel align="center">
      <h1>Vertical align</h1>
      <Panel verticalAlign="center">
        <h2 style={{ backgroundColor: '#007fff' }}>Vertical align</h2>
        <p style={{ backgroundColor: '#00b602' }}>center</p>
      </Panel>
      <h2>Vertical align</h2>
      <Panel verticalAlign="start">
        <h2 style={{ backgroundColor: '#007fff' }}>Vertical align</h2>
        <p style={{ backgroundColor: '#00b602' }}>center</p>
      </Panel>
      <h3>Vertical align</h3>
      <Panel verticalAlign="end">
        <h2 style={{ backgroundColor: '#007fff' }}>Vertical align</h2>
        <p style={{ backgroundColor: '#00b602' }}>center</p>
      </Panel>
    </Panel>
  </>
));

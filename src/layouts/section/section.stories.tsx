import React from 'react';
import { storiesOf } from '@storybook/react';

import { Section } from './section';

storiesOf('Section', module).add('Section', () => (
  <Section header={<h1>Main</h1>}>
    <div>Section</div>
    <Section header={<h2>Secondary</h2>}>
      <span>Section</span>
    </Section>
  </Section>
));

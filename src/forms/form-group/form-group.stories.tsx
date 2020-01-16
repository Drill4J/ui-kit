import React from 'react';
import { storiesOf } from '@storybook/react';

import { FormGroup } from './form-group';

storiesOf('Form-group', module).add('Form-group', () => (
  <FormGroup
    label="Form"
    optional
    actions={(
      <select>
        <option>Пункт 1</option>
        <option>Пункт 2</option>
      </select>
    )}
  >
    <input />
  </FormGroup>
));

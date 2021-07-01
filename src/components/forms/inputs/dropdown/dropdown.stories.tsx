import { storiesOf } from '@storybook/react';

import { Dropdown } from './dropdown';

storiesOf('Dropdown', module).add('Dropdown', () => (
  <Dropdown
    items={[
      { value: 'first item', label: 'label' },
      { value: 'second item', label: 'label' },
    ]}
    value="Dropdown"
    onChange={() => {}}
  />
));

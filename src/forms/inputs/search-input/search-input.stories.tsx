import React from 'react';
import { storiesOf } from '@storybook/react';

import { SearchInput } from './search-input';

storiesOf('SearchInput', module).add('SearchInput types', () => {
  const [value, setValue] = React.useState('');
  return (
    <>
      <SearchInput
        placeholder="enter text..."
      />
      <SearchInput
        placeholder="enter text..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        reset={() => setValue('')}
      />
    </>
  );
});

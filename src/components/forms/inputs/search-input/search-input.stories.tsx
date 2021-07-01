import { useState } from 'react';
import { storiesOf } from '@storybook/react';
import 'twin.macro';

import { SearchInput } from './search-input';

storiesOf('SearchInput', module).add('SearchInput types', () => {
  const [value, setValue] = useState('');
  return (
    <div tw="bg-monochrome-white w-full h-full p-10">
      <SearchInput
        placeholder="enter text..."
        value={value}
        onChange={(event) => setValue(event.target.value)}
        reset={() => setValue('')}
      />
    </div>
  );
});

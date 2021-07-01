import { useState } from 'react';
import { storiesOf } from '@storybook/react';

import { Checkbox } from './checkbox';

storiesOf('Checkbox', module).add('Checkbox', () => {
  const [checkedFirst, setCheckedFirst] = useState(false);
  const [checkedSecond, setCheckedSecond] = useState(false);
  const [checkedThre, setCheckedThre] = useState(false);
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'auto auto auto' }}>
      <Checkbox
        color="#F7D77C"
        checked={checkedFirst}
        label={checkedFirst ? 'checked' : 'not checked'}
        onChange={() => (checkedFirst ? setCheckedFirst(false) : setCheckedFirst(true))}
      />
      <Checkbox
        checked={checkedSecond}
        label={checkedSecond ? 'checked' : 'not checked'}
        onChange={() => (checkedSecond ? setCheckedSecond(false) : setCheckedSecond(true))}
      />
      <Checkbox
        checked={checkedThre}
        label="disable"
        onChange={() => (checkedThre ? setCheckedThre(false) : setCheckedThre(true))}
        disabled
      />
    </div>
  );
});

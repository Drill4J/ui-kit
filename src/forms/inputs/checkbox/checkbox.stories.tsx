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
      <Checkbox
        checked={checkedFirst}
        label={checkedFirst ? 'checked' : 'not checked'}
        onChange={() => (checkedFirst ? setCheckedFirst(false) : setCheckedFirst(true))}
        color="blue"
      />
      <Checkbox
        checked={checkedSecond}
        label={checkedSecond ? 'checked' : 'not checked'}
        onChange={() => (checkedSecond ? setCheckedSecond(false) : setCheckedSecond(true))}
        color="blue"
      />
      <Checkbox
        checked={checkedThre}
        label="disable"
        onChange={() => (checkedThre ? setCheckedThre(false) : setCheckedThre(true))}
        color="blue"
        disabled
      />
      <Checkbox
        checked={checkedFirst}
        label={checkedFirst ? 'checked' : 'not checked'}
        onChange={() => (checkedFirst ? setCheckedFirst(false) : setCheckedFirst(true))}
        color="green"
      />
      <Checkbox
        checked={checkedSecond}
        label={checkedSecond ? 'checked' : 'not checked'}
        onChange={() => (checkedSecond ? setCheckedSecond(false) : setCheckedSecond(true))}
        color="green"
      />
      <Checkbox
        checked={checkedThre}
        label="disable"
        onChange={() => (checkedThre ? setCheckedThre(false) : setCheckedThre(true))}
        color="green"
        disabled
      />
      <Checkbox
        checked={checkedFirst}
        label={checkedFirst ? 'checked' : 'not checked'}
        onChange={() => (checkedFirst ? setCheckedFirst(false) : setCheckedFirst(true))}
        color="red"
      />
      <Checkbox
        checked={checkedSecond}
        label={checkedSecond ? 'checked' : 'not checked'}
        onChange={() => (checkedSecond ? setCheckedSecond(false) : setCheckedSecond(true))}
        color="red"
      />
      <Checkbox
        checked={checkedThre}
        label="disable"
        onChange={() => (checkedThre ? setCheckedThre(false) : setCheckedThre(true))}
        color="red"
        disabled
      />
      <Checkbox
        checked={checkedFirst}
        label={checkedFirst ? 'checked' : 'not checked'}
        onChange={() => (checkedFirst ? setCheckedFirst(false) : setCheckedFirst(true))}
        color="yellow"
      />
      <Checkbox
        checked={checkedSecond}
        label={checkedSecond ? 'checked' : 'not checked'}
        onChange={() => (checkedSecond ? setCheckedSecond(false) : setCheckedSecond(true))}
        color="yellow"
      />
      <Checkbox
        checked={checkedThre}
        label="disable"
        onChange={() => (checkedThre ? setCheckedThre(false) : setCheckedThre(true))}
        color="yellow"
        disabled
      />
      <Checkbox
        checked={checkedFirst}
        label={checkedFirst ? 'checked' : 'not checked'}
        onChange={() => (checkedFirst ? setCheckedFirst(false) : setCheckedFirst(true))}
        color="orange"
      />
      <Checkbox
        checked={checkedSecond}
        label={checkedSecond ? 'checked' : 'not checked'}
        onChange={() => (checkedSecond ? setCheckedSecond(false) : setCheckedSecond(true))}
        color="orange"
      />
      <Checkbox
        checked={checkedThre}
        label="disable"
        onChange={() => (checkedThre ? setCheckedThre(false) : setCheckedThre(true))}
        color="orange"
        disabled
      />
    </div>
  );
});

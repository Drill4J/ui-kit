import React from 'react';
import renderer from 'react-test-renderer';

import { FormGroup } from './form-group';

it('should match snapshot', () => {
  const tree = renderer.create(
    <FormGroup
      label="Form"
      optional
      actions={(
        <select>
          <option>Action 1</option>
          <option>Action 2</option>
        </select>
      )}
    >
      <input />
    </FormGroup>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});

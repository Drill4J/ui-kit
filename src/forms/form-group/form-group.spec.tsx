import renderer from 'react-test-renderer';

import { FormGroup } from './form-group';

it('should match snapshot', () => {
  const tree = renderer
    .create(
      <FormGroup
        label="Form"
        optional
      >
        <input />
      </FormGroup>,
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

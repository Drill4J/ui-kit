import renderer from 'react-test-renderer';

import { DropdownInput } from './dropdown-input';

describe('DropdownInput', () => {
  it('Should render a DropdownInput', () => {
    const tree = renderer
      .create(
        <DropdownInput
          options={
            [{ value: 'first', label: 'first' },
              { value: 'first', label: 'second' }]
          }
          value={{ value: 'first', label: 'first' }}
          onChange={() => {}}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

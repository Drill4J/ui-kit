import renderer from 'react-test-renderer';

import { Dropdown } from './dropdown';

describe('Dropdown', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Dropdown
          items={[
            { value: 'first item', label: 'label' },
            { value: 'second item', label: 'label' },
          ]}
          value="Dropdown"
          onChange={() => {}}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

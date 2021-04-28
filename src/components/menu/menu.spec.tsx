import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Menu } from './menu';
import '../../__mocks__/intersectionObserverMock';

describe('Menu', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Menu
          items={[
            {
              label: 'Rename',
              icon: 'Edit',
              onClick: () => {},
            },
          ]}
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should expand the menu list', () => {
    const mockFn = jest.fn();
    const wrapper = mount(<Menu
      items={[
        {
          label: 'Rename',
          icon: 'Edit',
          onClick: mockFn,
        },
        {
          label: 'Add',
          icon: 'Edit',
          onClick: mockFn,
        },
      ]}
    />);

    wrapper.find('div[data-test="menu:icon:"]').simulate('click');
    wrapper.find('div[data-test="menu:item:rename"]').simulate('click');
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});

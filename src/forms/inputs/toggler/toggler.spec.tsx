import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Toggler } from './toggler';

describe('Toggler', () => {
  it('Should render a toggler', () => {
    const tree = renderer
      .create(
        <Toggler
          label="toggler"
          onChange={() => {}}
          value
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should toggle the state', () => {
    const mockFn = jest.fn();
    const props = {
      label: 'toggler',
      onChange: mockFn,
      value: false,
    };
    const wrapper = mount(
      <Toggler {...props} />,
    );
    wrapper.find('input').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
});

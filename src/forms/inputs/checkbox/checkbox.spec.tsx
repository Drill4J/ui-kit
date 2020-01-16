import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Checkbox } from './checkbox';


describe('Checkbox', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Checkbox
        checked
        label="checkbox"
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should calls onChange when the checkbox label is clicked', () => {
    const wrapper = mount(<Checkbox label="Click me!" />);
    const checkbox = () => wrapper.find('input');
    expect(wrapper.props().label).toEqual('Click me!');
    checkbox().simulate('change', { target: { checked: true } });
  });
});

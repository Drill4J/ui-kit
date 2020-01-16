import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Input } from './input';

describe('Input', () => {
  const mockFn = jest.fn();
  const props = {
    onChange: mockFn,
    rounded: false,
    disabled: false,
    checked: false,
    error: false,
    placeholder: 'placeholder initial state',
    value: 'input component',
    type: 'text',
  };

  it('Should render a Input', () => {
    const tree = renderer
      .create(
        <>
          <Input
            placeholder="enter text..."
          />
          <Input
            placeholder="enter text..."
            rounded
          />
          <Input
            placeholder="enter text..."
            disabled
          />
          <Input
            placeholder="enter text..."
            success
          />
          <Input
            placeholder="enter text..."
            error
          />
        </>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with initial state', () => {
    const wrapper = mount(
      <Input {...props} />,
    );
    wrapper.find('input').simulate('change');
    expect(mockFn).toHaveBeenCalled();
    expect(wrapper.prop('value')).toContain('input component');
    expect(wrapper.prop('placeholder')).toContain('placeholder initial state');
  });
});

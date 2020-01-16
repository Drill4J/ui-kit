import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Textarea } from './textarea';

describe('Textarea', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <Textarea value="Textarea component" onChange={() => {}} />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render component with initial state', () => {
    const mockFn = jest.fn();
    const props = {
      value: 'textarea',
      onChange: mockFn,
    };
    const wrapper = mount(<Textarea {...props} />);
    wrapper.find('textarea').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
});

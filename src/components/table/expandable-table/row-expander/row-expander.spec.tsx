import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { RowExpander } from './row-expander';

describe('RowExpander', () => {
  const mockFn = jest.fn();
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <RowExpander
          onClick={mockFn}
          expanded
        />,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should handle click expanded row', () => {
    const wrapper = mount(<RowExpander
      onClick={mockFn}
      expanded
    />);

    wrapper.simulate('click');
    expect(mockFn).toHaveBeenCalled();
  });
});

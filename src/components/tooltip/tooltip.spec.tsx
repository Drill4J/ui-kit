import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Tooltip } from './tooltip';

describe('Tooltip', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(
      <Tooltip
        position="bottom"
        message={(
          <span>Tooltip</span>
        )}
      >
        <div>Tooltip</div>
      </Tooltip>,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should render message at mouserover', () => {
    const props = {
      message: <span>Message</span>,
      children: <div>Tooltip</div>,
    };
    const wrapper = mount(<Tooltip position="bottom" {...props} />);
    wrapper.find('div').at(1).simulate('mouseover');
    expect(wrapper.find('element(message)').contains(<span>Message</span>)).toEqual(true);
  });

  it('should hide message at mouseleave', () => {
    const props = {
      message: <span>Message</span>,
      children: <div>Tooltip</div>,
    };
    const wrapper = mount(<Tooltip position="top" {...props} />);
    wrapper.find('div').at(1).simulate('mouseleave');
    expect(wrapper.find('element(message)').contains(<span>Message</span>)).toEqual(false);
  });
});

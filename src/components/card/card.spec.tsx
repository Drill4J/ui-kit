import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Card } from './card';

describe('Card', () => {
  it('should match snapshot card', () => {
    const tree = renderer.create(<Card
      methods={{
        totalCount: 2000,
        coveredCount: 740,
        methodsType: 'ALL METHODS',
      }}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display the card without risks, if there are none', () => {
    const wrapper = mount(<Card
      methods={{
        totalCount: 12,
        coveredCount: 0,
        methodsType: 'DELETED',
      }}
    />);
    expect(wrapper.find('element(risks-count)')).toHaveLength(0);
  });
});

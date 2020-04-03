import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { CircleDiagram } from './circle-diagram';

describe('CircleDiagram', () => {
  const mockValues = {
    coverage: 50,
    diameter: 400,
    strokeWidth: 10,
  };

  it('should match snapshot circle-diagram', () => {
    const tree = renderer.create(
      <CircleDiagram values={mockValues} />,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should recalculate the offset value when changing coverage', () => {
    const wrapper = mount(
      <CircleDiagram values={mockValues} />,
    );
    wrapper.setProps({ values: { ...mockValues, coverage: 100 } });
    expect(wrapper.find('circle[type="coverage"]').getElement().props.strokeDashoffset).toEqual(0);
  });
});

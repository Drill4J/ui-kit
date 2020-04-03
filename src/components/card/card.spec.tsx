import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { Card } from './card';

describe('Card', () => {
  it('should match snapshot card', () => {
    const tree = renderer.create(<Card
      icon="Icon"
      methods={{
        totalCount: 2000,
        coveredCount: 600,
        risksCount: 640,
        coveredFromTotalCount: 30,
        currentBuildCoverage: 40,
        overlappedCoverage: 5,
        activeScopeCoverage: 10,
        methodsType: 'ALL METHODS',
      }}
    />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should display the card without risks, if there are none', () => {
    const wrapper = mount(<Card
      icon="Icon"
      methods={{
        totalCount: 500,
        coveredCount: 150,
        risksCount: 0,
        coveredFromTotalCount: 30,
        currentBuildCoverage: 40,
        overlappedCoverage: 5,
        activeScopeCoverage: 10,
        methodsType: 'UNAFFECTED',
      }}
    />);
    expect(wrapper.find('element(risks)')).toHaveLength(0);
  });
});

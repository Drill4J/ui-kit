import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import { TabsPanel, Tab } from './tabs';

describe('Tabs Panel', () => {
  it('should match snapshot', () => {
    const tree = renderer
      .create(
        <TabsPanel activeTab="general" onSelect={() => 'system'}>
          <Tab name="general">General</Tab>
          <Tab name="system">System</Tab>
          <Tab name="plugins">Plugins</Tab>
        </TabsPanel>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should displays 3 tabs', () => {
    const wrapper = mount(
      <TabsPanel activeTab="general" onSelect={() => 'system'}>
        <Tab name="general">General</Tab>
        <Tab name="system">System</Tab>
        <Tab name="plugins">Plugins</Tab>
      </TabsPanel>,
    );
    expect(wrapper.find('button')).toHaveLength(3);
  });

  it('should change active tab after click', () => {
    const activeTab = 'system';
    const handleSelect = jest.fn();
    const wrapper = mount(
      <TabsPanel activeTab={activeTab} onSelect={handleSelect}>
        <Tab name="general">General</Tab>
        <Tab name="system">System</Tab>
        <Tab name="plugins">Plugins</Tab>
      </TabsPanel>,
    );
    wrapper
      .find('button')
      .at(1)
      .simulate('click');
    expect(handleSelect).toHaveBeenCalledWith(activeTab);
    expect(
      wrapper
        .find('button')
        .at(1)
        .prop('className'),
    ).toMatch(/--active/);
  });
});

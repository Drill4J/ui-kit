import React from 'react';
import renderer from 'react-test-renderer';

import { TabsPanel, Tab } from './tabs';

it('renders correctly', () => {
  const tree = renderer.create(
  <TabsPanel activeTab={'general'} onSelect={()=> 'system'}>
    <Tab name="general">General</Tab>
    <Tab name="system">System</Tab>
    <Tab name="plugins">Plugins</Tab>
  </TabsPanel>).toJSON();
  
  expect(tree).toMatchSnapshot();
});